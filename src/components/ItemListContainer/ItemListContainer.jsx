import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getZapatillas } from '../zapatillas'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams()

    useEffect(() => {
        if(categoriaId) {
            getZapatillas
                .then(res => setData(res.filter(prod => prod.categoria === categoriaId)))
                .catch((error) => {console.error(error)})
        } else {
            getZapatillas
                .then((res) => {setData(res);})
                .catch((error) => {console.error(error);})
        }
    }, [categoriaId]);

    return (
        <div>
            <ItemList zapatillasDetails={data}/>
        </div>
    )
}

export default ItemListContainer;