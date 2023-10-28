import { useState, React, createContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import CartContext from "./CartContext";
import ItemCount from "../ItemCount/ItemCount";


const CartContextProvider = () =>{
let [quantity, setQuantity] = useState(0);



// const [cart, setCart] = useState({});
// const addProduct = (item, quantity) => {
// if (isInCart(item.id)){
//     setCart(cart.map(product => {return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product}));
// }
// else{
//         setCart([...cart, {...item, quantity}]);
//     }
// }

// const totalPrice = () => {
//     return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
// }

// const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

// const clearCart = () => setCart([]);
// const isInCart = (id) => cart.some(product => product.id === id);
// const removeCart = (id) => setCart(cart.filter(product => product.id !== id));



  return (
    <div>
      <CartContext.Provider value={{quantity, setQuantity}}>
        <CartWidget />
        <ItemCount />
      </CartContext.Provider>
    </div>
  ); 

}
export default CartContextProvider;