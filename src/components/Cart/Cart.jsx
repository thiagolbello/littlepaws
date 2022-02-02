import { useCartContext } from "./CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import Resumen from "../Resumen"



const Cart = () => {
    const { cartList, vaciarCarrito, sumarPrecios } = useCartContext ()
    const [cond, setCond] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()   
         // Nuevo objeto de orders    
        let orden = {}
        //orden.date = Timestamp.fromDate(new Date())        

        orden.buyer = dataForm // {name, email, phone}
        orden.total = sumarPrecios();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        // guardar la orden en firestore
        const db = getFirestore()

        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden) // setDoc
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        //.finally(() => console.log('cargando'))

        // actualizando
        
        // const orderDoc = doc(db, 'items', '6eM60FtSwRMzywcrTonV')
        // updateDoc(orderDoc, {
        //     stock: 98
        // })

        // actualizar stock
        const queryCollection = collection(db, 'items')

        //console.log(cleccionNoti)
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCond(true)    
    }

    function handleChange(e) {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
        <div>  
            {
                cond  ? 
                    <Resumen idOrden={idOrden} />
                : 
                    <>
                        {cartList.map(prod => <li key={prod.id}>{prod.name} - cant: {prod.cantidad}</li>)}
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <h3>Precio Total: {sumarPrecios()}</h3>
                        <form 
                            onSubmit={realizarCompra} 
                            //onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>
                        {/* <button onClick={realizarCompra}>Generar Orden</button> */}
                    </>

            }          
        </div>
    )
}

export default Cart


// const cleccionNoti = collection(db, 'items')
//         //console.log(cleccionNoti)
//         const queryActulizarStock = query(
//             cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
//         )
//         //console.log(queryActulizarStock)

//         const batch = writeBatch(db)       
        
//         await getDocs(queryActulizarStock)
//         .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
//             stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
//             }) 
//         ))
//         .catch(err => console.log(err))
//         .finally(()=> console.log('stock actualizado'))

//         batch.commit()
