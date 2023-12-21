import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Container } from '@mui/material';
import TemporaryDrawer from './Drawer';
import { Link } from 'react-router-dom';
const Navba = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}>
      <TemporaryDrawer />
      <Container>
      <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            BOOKS 69
          </Typography>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color:'black' }}
            />
          </div>
          <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/ContactUS"><Button color="inherit">Contact Us</Button></Link>
          <Link to="/Aboutus"><Button color="inherit">About Us</Button></Link>
          <Link to="/Login"><Button color="inherit">Logout</Button></Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navba;
