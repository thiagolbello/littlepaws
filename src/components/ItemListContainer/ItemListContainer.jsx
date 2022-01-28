import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import { getDocs, getFirestore, query, where, collection } from 'firebase/firestore'

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams()

    useEffect(() => {
        if(categoriaId) {
            const db = getFirestore()
            const queryProducts = query(collection(db, 'items'), where('categoria', '==', categoriaId))
            getDocs(queryProducts).then(res => setData(res.docs.map((prod)=>({id: prod.id, ...prod.data()}))))
        } else {
            const db = getFirestore()
            const queryProducts = collection(db, 'items')
            getDocs(queryProducts).then(res => setData(res.docs.map((prod)=>({id: prod.id, ...prod.data()}))))
        }
    }, [categoriaId]);

    return (
        <div>
            <ItemList zapatillasDetails={data}/>
        </div>
    )
}

export default ItemListContainer;