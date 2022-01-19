import ItemCount from "../ItemCount"

const ItemDetail = ({details}) => {

    return (
        <div>
            <img src={`../${details.image}`} width={400}></img>
            <h1><strong>Nombre: </strong>{details.name}</h1>
            <h3><strong>Descripcion: </strong>{details.description}</h3>
            <h2><strong>Precio: </strong>{details.price}</h2>
            <h4><strong>Stock: </strong>{details.stock}</h4>
            <ItemCount stock={details.stock}/>
        </div>
    )
}

export default ItemDetail