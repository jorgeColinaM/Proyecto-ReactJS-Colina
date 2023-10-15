import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

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

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Products)
            }, 1000);
        })
        if (categoryId) {
            getData.then(res => setData(res.filter(comida => comida.category === categoryId)));
        }else
        getData.then(res => setData(res))
    }, [categoryId])

    

    return (
        <>
        <div className="greeting">
            <h1>{greeting}</h1>
        </div>
        <ItemList data={data}/>
        </>
        
    );

};

export default ItemListContainer