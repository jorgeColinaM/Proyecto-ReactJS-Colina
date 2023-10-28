import { useContext } from "react";
import "./CartWidget.css";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SelectedProducts,  } from "../../shared/constans";
import CartContext from "../CartContext/CartContext";



export const CartWidget = () => {
 const totalProducts = SelectedProducts.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
 const {quantity, setQuantity} = useContext(CartContext);

  return (
    <>
    <div className="cart-widget-container">
      <IconButton aria-label="shopping cart">
        <ShoppingCartIcon />
      </IconButton>
      <span>{quantity}</span>
    </div>
    
    </>
  );
};

export default CartWidget;
