import React, { useContext } from "react";
import "./CartWidget.css";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";



export const CartWidget = () => {
 const {totalQuantity} = useContext(CartContext);

  return (
    <>
    <div className="cart-widget-container">
      <Link to='/cart'>
      <IconButton aria-label="shopping cart">
         <ShoppingCartIcon />
      </IconButton>
      </Link>
      <span>{totalQuantity}</span>
    </div>
    
    </>
  );
};

export default CartWidget;
