import React from "react"
import { PRODUCTS } from "../../shared/constans";
import ProductCart from "../ProductCart/ProductCart";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import './Category.css'

export const Categories = () => {

    const categories = ["comida", "bebida", "bebida fria"];
    return (
        <Box sx={{ flexGrow: 1 }}>
         {categories.map(category =>
        <Grid key={category} container spacing={2}>
            <Grid xs={12}>
            <div className="title">{category}</div>
            </Grid>
            {PRODUCTS.filter(prod => prod.category === category).map(product =>
                <Grid key={product.id} xs={4}>
                    <ProductCart info={product}/>
                </Grid>
            )}
        </Grid>
        )}
        </Box>
    )
}

export default Categories