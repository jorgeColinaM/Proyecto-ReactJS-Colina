import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import './Cart.css';

const Cart= ()=> {
    const {cart, removeProduct} = useContext(CartContext);

    if(cart.length > 0){
        return (
            <>
                <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
                    {cart.map(itemCart => 
                    <ListItem secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => removeProduct(itemCart.id)}>
                        <DeleteIcon />
                        </IconButton>
                    } key={itemCart.id}>
                    <ListItemAvatar>
                    <Avatar alt={itemCart.title} src={itemCart.image} />
                    </ListItemAvatar>
                    <ListItemText primary={itemCart.title} secondary={"Cantidad: " + itemCart.quantity} />
                    </ListItem>
                    )}
                </List>
                <Button className="checkout-button" variant="contained">Finalizar compra</Button>    
            </>
            );     
    }else{
        return(
            <div className="error-message">
                <h1>No hay articulos en el carrito</h1>
            </div>
        )
    }
  
  
}

export default Cart;