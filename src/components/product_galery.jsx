import React, { useState } from 'react';
import {
  Container, Paper, Button, Grid,
} from '@mui/material';
import PropTypes from 'prop-types';

function ProductImageGallery({ images }) {
  const validImages = images.filter(
    (image) => image && typeof image === 'string' && image.trim() !== '',
  );
  const [currentImage, setCurrentImage] = useState(0);

  if (validImages.length === 0) {
    return <div>No hay imágenes disponibles</div>;
  }

  return (
    <Container maxWidth="md">
      <Paper style={{ textAlign: 'center' }} elevation={0}>
        <Grid
          container
          justifyContent="center"
          sx={{
            margin: { xs: '2rem 0', md: '6rem 0' },
          }}
        >
          <img
            src={validImages[currentImage]}
            alt={`Imagen del producto ${currentImage + 1}`}
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        </Grid>
        <Grid container justifyContent="center">
          {validImages.map((image, index) => (
            <Grid item key={image}>
              <Button
                onClick={() => setCurrentImage(index)}
              >
                <img
                  src={image}
                  alt={`Imagen del producto ${index + 1}`}
                  style={{ maxWidth: '100%', maxHeight: '50px' }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

ProductImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductImageGallery;
