import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {PRODUCTS} from '../../shared/constans';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => setTimeout(() => {
        resolve(PRODUCTS);
    }, 1000)); 

    getData.then(res => setData(res.find(comida => comida.id === parseInt(detailId))));
  }, [])
  
    return (
        <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer