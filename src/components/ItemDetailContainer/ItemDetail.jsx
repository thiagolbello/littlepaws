const ItemDetail = ({details}) => {
    
    return (
        <div>
            <a><strong>Nombre: </strong>{details.name}</a>
            <a><strong>Genero: </strong>{details.gender}</a>
            <a><strong>Descripcion: </strong>{details.description}</a>
            <a><strong>Edad: </strong>{details.age}</a>
            <a><strong>Altura: </strong>{details.height}</a>
            <a><strong>Peso: </strong>{details.weight}</a>
        </div>
    )
}

export default ItemDetail