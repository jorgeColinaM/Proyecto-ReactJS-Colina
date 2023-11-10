import React from 'react'
import './ProductCart.css'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const ProductCart = ({info}) => {
  return (
    <>
    <Card className='card__container' sx={{ maxWidth: 345}}>
    <CardMedia className='card__img'
      sx={{ height: 150}}
      image= {`${info.image}`}
      title={info.title}
    />
    <CardContent>
      <Typography className='card__title' gutterBottom variant="h5" component="div">
      {info.title}
      </Typography>
      <Typography className='card__description' variant="body2" color="text.secondary">
        description
      </Typography>
    </CardContent>
    <CardActions className='card__buttonsEnd'>
      <Link to={`/detail/${info.id}`} className='Product'><Button className='Product__B'>Detalles</Button></Link>
    </CardActions>
  </Card>
  </>
  );
};

export default ProductCart