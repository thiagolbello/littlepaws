import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getZapatillas } from '../zapatillas';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [zapatillasDetails, setZapatillasDetails] = useState({});

    const {detallesId} = useParams()

    useEffect(() => {
        getZapatillas
        .then(resp => setZapatillasDetails(resp.find(prod => prod.id === detallesId)))
    }, [detallesId]);

    return (
        <div>
            <ItemDetail details={zapatillasDetails}/>
        </div>
    )
}

export default ItemDetailContainer;