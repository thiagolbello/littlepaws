import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount"
import { useCartContext } from "../Cart/CartContext"

const ItemDetail = ({details}) => {

    const [show, setShow] = useState (true)
    const {cartList, agregarAlCarrito} = useCartContext()

    console.log(cartList)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito({...details, cantidad: contador})
    }
    
    return (
        <div>
            <img src={`../${details.image}`} width={400}></img>
            <h1><strong>Nombre: </strong>{details.name}</h1>
            <h3><strong>Descripcion: </strong>{details.description}</h3>
            <h2><strong>Precio: </strong>{details.price}</h2>
            <h4><strong>Stock: </strong>{details.stock}</h4>

            {show ? <ItemCount stock={details.stock} onAdd={onAdd}/> : 
            <div>
                <Link to='/cart'><button>Terminar la Compra</button></Link>
                <Link to='/'><button>Continuar Comprando</button></Link>
            </div>
            }
        </div>
    )
}

export default ItemDetail