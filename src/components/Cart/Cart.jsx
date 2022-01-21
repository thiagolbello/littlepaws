import { useCartContext } from "./CartContext"

const Cart = () => {
    const {cartList, vaciarCarrito} = useCartContext()
    return (
        <div>
            {cartList.map(prod => <li key={prod.id}>{prod.name} - cant: {prod.cantidad}</li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart