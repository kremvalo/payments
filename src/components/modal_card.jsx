import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Modal,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Button,
} from '@mui/material';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import secureLocalStorage from 'react-secure-storage';

function ModalCard({ open, handleClose, openBackdrop }) {
  const maxLengthNumber = 16;
  const maxLengthExpiry = 4;
  const maxLengthCvc = 3;
  const [cardState, setCardState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const validateEmptyInput = () => !(cardState.number.length > 0
        && cardState.name.length > 0
        && cardState.expiry.length > 0
        && cardState.cvc.length > 0);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if ((name === 'number' && evt.target.value.length <= maxLengthNumber)
      || (name === 'expiry' && evt.target.value.length <= maxLengthExpiry)
      || (name === 'cvc' && evt.target.value.length <= maxLengthCvc)
      || (name === 'name' && evt.target.value.length <= 30)) {
      setCardState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setCardState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="md">
        <Paper
          component={Box}
          p={4}
          elevation={4}
          sx={{ height: '100%', mt: { xs: 3, md: 14 } }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight="bold">
            Registra tu tarjeta de credito
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Por favor a continuación digita los datos de tu tarjeta.
          </Typography>
          <Grid container pt={5} justifyContent="center" justifyItems="center">
            <Grid item xs={12} sm={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: maxLengthNumber }}
                    name="number"
                    type="number"
                    placeholder="Número de tarjeta"
                    value={cardState.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: 100 }}
                    name="name"
                    placeholder="Nombre"
                    value={cardState.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: maxLengthNumber }}
                    name="expiry"
                    type="number"
                    placeholder="Vigencia"
                    value={cardState.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{ maxLength: 100 }}
                    name="cvc"
                    type="number"
                    placeholder="CVC"
                    value={cardState.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="caption">
                    Todos los campos con obligatorios*
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} pl={6} pt={3} justifyContent="center" justifyItems="center">
              <Cards
                number={cardState.number}
                expiry={cardState.expiry}
                cvc={cardState.cvc}
                name={cardState.name}
                focused={cardState.focus}
              />
            </Grid>

          </Grid>

          <Box sx={{ '& button': { mt: 5, width: '100%' } }}>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              disabled={validateEmptyInput()}
              onClick={() => {
                secureLocalStorage.setItem('cardData', cardState);
                secureLocalStorage.setItem('cardDataWithoutExposure', {
                  number: cardState.number.slice(-4),
                  name: cardState.name,
                  expiry: cardState.expiry,
                });
                handleClose();
                openBackdrop();
              }}
            >
              Ir a pagar
            </Button>
          </Box>
        </Paper>

      </Container>
    </Modal>
  );
}

ModalCard.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  openBackdrop: PropTypes.func.isRequired,
};

export default ModalCard;
