import React from 'react'
import './ItemDetail'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);

    }

  return (
    <div className='container'>
        <div className='detail'>
            <img src={data.image} alt="" className="detail__image" />
            <div className="content">
                <h1>{data.title}</h1>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail