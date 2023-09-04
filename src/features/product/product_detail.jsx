import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  CssBaseline,
  Button,
  CircularProgress,
} from '@mui/material';

import { getProductAsync } from './product_slice';

import CustomAppBar from '../../components/app_bar';
import ProductGallery from '../../components/product_galery';
import ProductColorBar from '../../components/colors_bar';
import CustomAccordion from '../../components/custom_accordion';
import ModalCard from '../../components/modal_card';

export default function ProductDetail() {
  const { productData, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);

  return (
    loading
      ? (
        <Container>
          <CircularProgress />
        </Container>
      )
      : (
        <Container maxWidth="lg">
          <CssBaseline />
          <CustomAppBar />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Paper
                component={Box}
                p={2}
                elevation={0}
                style={{ height: '100%' }}
              >
                <ProductGallery images={productData.images} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Paper
                component={Box}
                p={2}
                elevation={0}
                style={{ height: '100%' }}
              >
                <section>
                  <Typography variant="caption" pt={6}>
                    {productData.category}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {productData.name}
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    {productData.description}
                  </Typography>
                  <Typography variant="h3" gutterBottom pt={4}>
                    $
                    {productData.price}
                  </Typography>
                  <ProductColorBar colors={productData.colors} />
                  <CustomAccordion
                    title="Especificaciones y detalles"
                    message={productData.specifications}
                  />
                  <CustomAccordion
                    title="En la caja"
                    message={productData.inTheBox}
                  />
                  <Box sx={{ '& button': { mt: 5, width: '100%' } }}>
                    <Button
                      variant="outlined"
                      size="large"
                      color="inherit"
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      Pagar con tarjeta de credito
                    </Button>
                  </Box>
                </section>
              </Paper>
            </Grid>
          </Grid>
          <ModalCard open={open} handleClose={handleClose} />
        </Container>
      )
  );
}
