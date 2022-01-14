import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAnimals } from '../animals'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams()

    useEffect(() => {
        if(categoriaId) {
            getAnimals
                .then(res => setData(res.filter(prod => prod.categoria === categoriaId)))
                .catch((error) => {console.error(error)})
        } else {
            getAnimals
                .then((res) => {setData(res);})
                .catch((error) => {console.error(error);})
        }
    }, [categoriaId]);

    return (
        <div>
            <ItemList animalsDetails={data}/>
        </div>
    )
}

export default ItemListContainer;