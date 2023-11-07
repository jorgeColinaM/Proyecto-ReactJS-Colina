import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    // const order = {
    //     buyer: {
    //         name: 'Jorge',
    //         email: 'jorge@gmail.com',
    //         phone: '091446534',
    //         address: 'jorgito1',
    //     },
    //     items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity, })),
    //     total: totalPrice(),

    // }
    // const handleClick = () => {
    //     const db = getFirestore();
    //     const ordersCollection = collection(db, 'orders');
    //     addDoc(ordersCollection, order)
    //     .then(({id}) => console.log(id))
    // }

    if(cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to="/">Ir a comprar</Link>
            </>
        )
    }
    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>Total: {totalPrice()}</p>
        { <button /*onClick={handleClick}*/>Emitir compra</button> }
        </>
    )
}

export default Cart