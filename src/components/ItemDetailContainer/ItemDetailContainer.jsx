import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PRODUCTS from '../../shared/constans';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detailId} = useParams();
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);}

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
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </CardActions>
    </Card>
    </>
  );
}

export default ItemDetailContainer