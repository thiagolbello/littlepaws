import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { cPrimary } from './Colors';
import { Link } from 'react-router-dom';

export default function Nav() {  
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: cPrimary }}>
        <Toolbar variant="dense" id='navcss'>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}><Typography variant="h6" component="div">demere</Typography></Link>
             
          <Link to="/categoria/perros" style={{ color: 'white', textDecoration: 'none' }}><Typography textAlign="center" margin={2}>Perros</Typography></Link>
          <Link to="/categoria/gatos" style={{ color: 'white', textDecoration: 'none' }}><Typography textAlign="center" margin={2}>Gatos</Typography></Link>

          <Button color="inherit"><ShoppingCartSharpIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}