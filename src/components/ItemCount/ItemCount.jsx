import './ItemCount.css'
import React, {useState, useEffect, useContext} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CartContext } from '../../CartContext/CartContext';

export const ItemCount = ({initial, stock, product}) => {

    const {addProduct}= useContext(CartContext);
    
    const [count, setCount] = useState(parseInt(initial));

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
       
        <Button variant="outlined" disabled={stock<=0} onClick={() => addProduct(product, count) }>Agregar al carrito</Button>

        </div>
        </>
    );
}
export default ItemCount;