import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
          © 2024 IVORY. All rights reserved.
        </Typography>
        <Typography variant="body1" color="inherit">
          Contact Us: example@email.com
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
