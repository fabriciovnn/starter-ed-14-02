import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import AlertDialog from '../components/AlertDialog';
import MyAppBar from '../components/MyAppBar';

const Home: React.FC = () => {
  const productsRedux = useAppSelector((state) => state.products);

  return (
    <>
      <MyAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Home</Typography>
            <AlertDialog />

            <Box sx={{ marginTop: '20px' }}>
              <Link to={'/products'}>Produtos</Link>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">Total de Produtos - {productsRedux.length}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
