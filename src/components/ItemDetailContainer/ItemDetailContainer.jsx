import React, { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import {PRODUCTS, SelectedProducts} from '../../shared/constans';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CartContext from '../CartContext/CartContext'

const ItemDetailContainer = () => {

  const {quantity, setQuantity} = useContext(CartContext);
  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => setTimeout(() => {
        resolve(PRODUCTS);
    }, 1000)); 

    getData.then(res => setData(res.find(comida => comida.id === parseInt(detailId))));
  }, [])
  
    return (
      <>
      <Card className='card__container' sx={{ maxWidth: 345}}>
      <CardMedia className='card__img'
        sx={{ height: 150}}
        image= {`${data.image}`}
        title={data.title}
      />
      <CardContent>
        <Typography className='card__title' gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography className='card__description' variant="body2" color="text.secondary">
          description
        </Typography>
      </CardContent>
      <CardActions className='card__buttonsEnd'>
      <ItemCount initial={1} product={data}/>
      </CardActions>
    </Card>
    </>
  );
}

export default ItemDetailContainer