import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCart from '../ProductCart/ProductCart';
import { PRODUCTS } from '../../shared/constans';

const LayoutGrid = () => {

    const [data, setData] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 1000);
        })
        if (categoryId) {
            getData.then(res => setData(res.filter(comida => comida.category === categoryId)));
        }else
        getData.then(res => setData(res))
    }, [categoryId])

  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map(Product => 
          <Grid key={Product.id} xs={3}>
            <ProductCart info={Product} />
          </Grid>
        )}
      </Grid>
    </Box>
  </>
  );
}
export default LayoutGrid;