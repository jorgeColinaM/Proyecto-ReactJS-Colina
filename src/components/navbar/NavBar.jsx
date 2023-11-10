import * as React from 'react';
import NavBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CartWidget from '../CartWidget/CartWidget';


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
          <Button variant="text" color="inherit">Inicio</Button>
          </Link>
          <Link to='/categories'>
          <Button variant="text" color="inherit">Categorias</Button>
          </Link>
          <Link to='/aboutUs'>
          <Button variant="text" color="inherit">Nosotros</Button>
          </Link>
          <Link to="/contact">
          <Button variant="text" color="inherit">Contacto</Button>
          </Link>
          <Link to="/checkout">
          <Button variant="text" color="inherit">Checkout</Button>
          </Link>
          <Link to="/cart">
          <CartWidget/>
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