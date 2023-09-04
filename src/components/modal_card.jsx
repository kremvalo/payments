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
} from '@mui/material';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function ModalCard({ open, handleClose }) {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
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
          p={2}
          elevation={0}
          sx={{ height: '100%', mt: { xs: 3, md: 14 } }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registrar tarjeta de credito
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Grid container pt={5} justifyContent="center">
            <Grid item xs={12} sm={5}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLengt={16}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </Grid>

          </Grid>
        </Paper>

      </Container>
    </Modal>
  );
}

ModalCard.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalCard;
