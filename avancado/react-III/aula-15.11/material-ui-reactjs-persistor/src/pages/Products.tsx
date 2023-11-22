import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProduct } from '../store/modules/products/productsSlice';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import MyAppBar from '../components/MyAppBar';

const Products: React.FC = () => {
  const productsRedux = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(productsRedux);
  }, [productsRedux]);

  function handleAdd() {
    dispatch(addProduct({ id: uuid(), name: 'Caneta', price: 2 }));
  }

  return (
    <>
      <MyAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Produtos</Typography>
            <Button variant="contained" onClick={handleAdd}>
              ADD
            </Button>

            <Box sx={{ marginTop: '20px' }}>
              <Link to={'/'}>Home</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Products;
