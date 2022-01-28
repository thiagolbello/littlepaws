import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
        const [zapatillasDetails, setZapatillasDetails] = useState({});
        const {detallesId} = useParams();

        useEffect(() => {
            const db = getFirestore();
            const queryDetail = doc(db, 'items', detallesId)
            getDoc(queryDetail).then((res) => {
                setZapatillasDetails({id: res.id, ...res.data()});
            });
        }, [detallesId]);

    return (
        <div>
            <ItemDetail details={zapatillasDetails}/>
        </div>
    )
}

export default ItemDetailContainer;