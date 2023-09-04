import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CustomAccordion({ title, message }) {
  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<AddIcon />}>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {message}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

CustomAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CustomAccordion;
