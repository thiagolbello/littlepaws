import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAnimals } from '../animals';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [animalsDetails, setAnimalsDetails] = useState({});

    const {detallesId} = useParams()

    useEffect(() => {
        getAnimals
        .then(resp => setAnimalsDetails(resp.find(prod => prod.id === detallesId)))
    }, [detallesId]);

    return (
        <div>
            <ItemDetail details={animalsDetails}/>
        </div>
    )
}

export default ItemDetailContainer;