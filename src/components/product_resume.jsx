import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
} from '@mui/material';

function ProductResume({
  id, name, price, imageUrl, quantity,
}) {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        pl: { xs: 0, md: 10 }, pr: { xs: 0, md: 10 }, pt: { xs: 3, md: 6 }, pb: { xs: 3, md: 5 },
      }}
    >
      <Grid item xs={7} sm={9}>
        <Grid
          container
          direction="column"
          spacing={0}
        >
          <Typography variant="p">
            {name}
          </Typography>
          <Typography variant="caption">
            $
            {parseInt(price, 10).toLocaleString()}
            {' '}
            x
            {quantity}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4} sm={3}>
        <img
          src={imageUrl}
          alt={`Imagen del producto ${id}`}
          style={{ maxWidth: '100%', maxHeight: '70px' }}
        />
      </Grid>
    </Grid>
  );
}

ProductResume.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductResume;
