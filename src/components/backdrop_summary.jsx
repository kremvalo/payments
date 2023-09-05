import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Backdrop,
} from '@mui/material';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import secureLocalStorage from 'react-secure-storage';
import Cards from 'react-credit-cards-2';

import ProductResume from './product_resume';

function BackdropSummary({ open, handleClose }) {
  const productData = secureLocalStorage.getItem('productData');
  const cardDataWithoutExposure = secureLocalStorage.getItem('cardDataWithoutExposure');

  return (
    <Backdrop
      sx={{ color: '#fff' }}
      open={open}
      className="custom-modal"
    >
      <Container maxWidth="lg" className="custom-modal-content">
        <Paper
          component={Box}
          p={4}
          elevation={0}
          style={{ height: '100%' }}
        >
          <Typography variant="h4" fontWeight="Bold">
            Resumen de la compra
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" pb={4}>
                Metodo de pago
              </Typography>
              <Cards
                number={cardDataWithoutExposure ? cardDataWithoutExposure.number : ''}
                expiry={cardDataWithoutExposure ? cardDataWithoutExposure.expiry : ''}
                name={cardDataWithoutExposure ? cardDataWithoutExposure.name : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pt: { xs: 5 } }}>
              <section>
                <Typography variant="h6">
                  Productos
                </Typography>
                {productData
                  ? (
                    <ProductResume
                      id={productData.id}
                      name={productData.name}
                      price={productData.price}
                      quantity={7}
                      imageUrl={productData.images[0]}
                    />
                  ) : (
                    <Typography variant="h2">
                      Sin productos por comprar
                    </Typography>
                  )}
                <Grid container sx={{ pl: { xs: 0, md: 10 } }}>
                  <Grid item xs={7} sm={7}>
                    <Typography variant="h6">
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sm={5}>
                    <Typography variant="h6">
                      $
                      {(productData != null
                        ? parseInt(productData.price, 10).toLocaleString()
                        : 0) * 7}
                    </Typography>
                  </Grid>
                </Grid>

              </section>
            </Grid>
          </Grid>
          <Box sx={{ '& button': { mt: 5 } }}>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              fullWidth
              onClick={() => {
                secureLocalStorage.setItem('productData', productData);
              }}
            >
              Finalizar compra
            </Button>
          </Box>
          <Box sx={{ '& button': { mt: 2 } }}>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              fullWidth
              onClick={() => {
                handleClose();
              }}
            >
              Volver
            </Button>
          </Box>
        </Paper>

      </Container>
    </Backdrop>
  );
}

BackdropSummary.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BackdropSummary;
