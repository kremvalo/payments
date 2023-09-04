import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function CustomAppBar() {
  return (
    <Container maxWidth="false" disableGutters>
      <Toolbar disableGutters>
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          fontFamily="Roboto"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          MARCA
        </Typography>
        <Typography
          variant="h4"
          noWrap
          component="a"
          fontFamily="Roboto"
          href="/"
          sx={{
            display: { xs: 'flex', md: 'none' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          MARCA
        </Typography>
      </Toolbar>
    </Container>
  );
}
export default CustomAppBar;
