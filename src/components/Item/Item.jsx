import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({info}) => {
  return (
    <Link to={`/detail/${info.id}`} className='Product'>
        <img src={info.image} alt= "imagen"/>
        <p>{info.title}</p>
    </Link>
  )
}

export default Item