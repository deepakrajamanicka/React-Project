import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
const ContactUs = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" gutterBottom>
        Contact Us
      </Typography>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
           <TextField label="Your Name" variant="outlined" fullWidth required />
          </Grid><Grid item xs={12} sm={6}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            /></Grid>
          <Grid item xs={12}>
            <StyledButton variant="contained" color="primary">
              Send Message
            </StyledButton>
          </Grid></Grid>
      </form>
    </StyledContainer>
  );
};
export default ContactUs;
