import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff', fontSize: '3rem' }}>
          Dental Clinic
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/services">Our Services</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        <Button color="inherit" component={Link} to="/feedback">Feedback</Button>
        <Button color="inherit">More</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
