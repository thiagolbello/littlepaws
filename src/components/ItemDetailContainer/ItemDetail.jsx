const ItemDetail = ({details}) => {

    return (
        <div>
            <h1><strong>Nombre: </strong>{details.name}</h1>
            <h2><strong>Genero: </strong>{details.gender}</h2>
            <h3><strong>Descripcion: </strong>{details.description}</h3>
            <h4><strong>Edad: </strong>{details.age}</h4>
            <h5><strong>Altura: </strong>{details.height}</h5>
            <h6><strong>Peso: </strong>{details.weight}</h6>
        </div>
    )
}

export default ItemDetail