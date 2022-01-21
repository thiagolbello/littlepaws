import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        const index = cartList.findIndex(i => i.id === items.id)

        if (index > -1){
            const cantidadVieja = cartList[index].cantidad

            cartList.splice(index, 1)
            setCartList([...cartList, {...items, cantidad: items.cantidad + cantidadVieja}])
        } else {
            setCartList ([...cartList, {...items, cantidad: items.cantidad}])
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}