import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

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
        </>
    )
}

export default Cart