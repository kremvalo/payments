import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Paper, Grid,
} from '@mui/material';

function ProductColorBar({ colors }) {
  return (
    <Paper elevation={0} style={{ padding: '20px 0px 50px 0px' }}>
      <Grid container spacing={2}>
        {colors.map((colorObj) => (
          <Grid item key={colorObj.id}>
            <Box
              width="40px"
              height="40px"
              bgcolor={colorObj.color}
              border="1px solid #ccc"
              borderRadius="50%"
              title={colorObj.name}
              style={{ cursor: 'pointer' }}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

ProductColorBar.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductColorBar;
