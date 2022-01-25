import { useCartContext } from "./CartContext"

const Cart = () => {
    const {cartList, vaciarCarrito, eliminarItem, sumarPrecios, sumarItems} = useCartContext()
    return (
        <div>
            {cartList.length === 0 ? (
                <h1>Aun no agregaste productos</h1>
            ) : (
                <div>
                    {cartList.map(prod => <li key={prod.id}>
                        {prod.name}, Cantidad: {prod.cantidad}
                        <button onClick={() => eliminarItem(prod.id)}>Eliminar</button>
                    </li>)}
                    <h3>Cantidad de Items Total: {sumarItems()}</h3>
                    <h3>Precio Total: {sumarPrecios()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    )
}

export default Cart