import * as React from 'react';
import NavBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      text: {
        primary: '#fff'
      },
    },

  });


 const Navbar = () => {
  return (
    <>
    
   <ThemeProvider theme={darkTheme}>
      
   <Box sx={{ flexGrow: 1 }}>
      <NavBar position="static" color="primary">
        <Toolbar className="container">
          <Typography className="nav__brand" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Café Vidanova
          </Typography>
          <div className='nav__links'>
          <Link to="/">
          <Button variant="text" color="inherit">Home</Button>
          </Link>
          <Link to='/aboutUs'>
          <Button variant="text" color="inherit">About-Us</Button>
          </Link>
          <Link to="/contact">
          <Button variant="text" color="inherit">Contact</Button>
          </Link>
          <Link to="/cart">
          <IconButton aria-label="shopping cart">
              <ShoppingCartIcon />
          </IconButton>
          </Link>
          </div>
        </Toolbar>
      </NavBar>
    </Box>

    </ThemeProvider>
    </>
  );
}
export default Navbar;