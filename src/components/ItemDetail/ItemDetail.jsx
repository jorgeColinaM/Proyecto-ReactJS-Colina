import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetail = ({data}) => {
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
  )
}

export default ItemDetail