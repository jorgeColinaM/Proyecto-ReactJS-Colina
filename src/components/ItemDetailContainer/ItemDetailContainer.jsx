import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const Products = [
    {id: 1, image: "./images/Foto crossfit.webp", title: "Comida", category: "comida"},
    {id: 2, image: "./images/Foto crossfit.webp", title: "Comida", category: "comida"},
    {id: 3, image: "./images/Foto crossfit.webp", title: "Comida", category: "comida"},
    {id: 4, image: "./images/Foto crossfit.webp", title: "Comida", category: "comida"},
    {id: 5, image: "./images/Foto crossfit.webp", title: "Comida", category: "comida"},
    {id: 6, image: "./images/Foto crossfit.webp", title: "Bebida", category: "bebida"},
    {id: 7, image: "./images/Foto crossfit.webp", title: "Bebida", category: "bebida"},
    {id: 8, image: "./images/Foto crossfit.webp", title: "Bebida", category: "bebida"},
    {id: 9, image: "./images/Foto crossfit.webp", title: "Bebida", category: "bebida"},
    {id:10, image: "./images/Foto crossfit.webp", title: "Bebida", category: "bebida"},
    ]

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => setTimeout(() => {
        resolve(Products);
    }, 1000));

    getData.then(res => setData(res.find(comida => comida.id === parseInt(detailId))));
  }, [])
  
  
  
    return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer