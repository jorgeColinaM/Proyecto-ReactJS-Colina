import './ItemCount.css'
import React, {useState, useEffect, useContext} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartContext from '../CartContext/CartContext';

export const ItemCount = ({initial, stock, product}) => {

    let {quantity, setQuantity} = useContext(CartContext);
    const [count, setCount] = useState(parseInt(initial));
    const onAdd = (product, quantity) => {
        console.log(`compraste ${quantity} unidades de ${product.toString()}`);
        setQuantity(++quantity)
      }

    const decrease = () =>  {
        setCount(count - 1);
    }
    const increase = () =>  {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])


    return(
        <>
        <div className='counter'>

        <ButtonGroup variant="text" aria-label="text button group">
        
        <IconButton disabled={count<1}onClick={decrease}>
        <RemoveIcon />
        </IconButton>

        <Chip label={count} />

        <IconButton disabled={count >= stock}onClick={increase}>
        <AddIcon />
        </IconButton>

        </ButtonGroup>
       
        <Button variant="outlined" disabled={stock<=0} onClick={() => setQuantity(count+1)}>Agregar al carrito</Button>

        </div>
        </>
    );
}
export default ItemCount;