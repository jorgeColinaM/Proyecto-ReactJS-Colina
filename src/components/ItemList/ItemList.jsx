import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({data=[]}) => {
  return (
    data.map(Product => <Item key={Product.id} info={Product}/>)
  )
}

export default ItemList