import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "@mui/material/Link"
import "./Navbar.css"
import { Box } from '@mui/material';

const Navbar = () => {
    return (
      <AppBar position="static" color="transparent" display="flex" sx={{"paddingY": "2vh"}}>
        <Toolbar>
          <Typography variant="h6" component="h6">
            <Link href="/" underline="none" color="inherit">
                NJ Unearthed
            </Link>
          </Typography>
          <Box m="auto">
            <Link href="/" underline="none" color="inherit" ml="auto" mr={5} ml={2} className="nav-item">
                    Home
            </Link>
            <Link href="/about" underline="none" color="inherit" mr={5} className="nav-item"> 
                    About
            </Link>
            <Link href="/contact" underline="none" color="inherit" mr={5} className="nav-item"> 
                    Contact
            </Link>
         
            <Link href="/search" underline="none" color="inherit" className="nav-item"> 
                    Search
            </Link>
          </Box>
          <Box mr={2}>
            <Button variant="outlined" >
                <Link href="/login" underline="none" color="inherit">
                        Login
                </Link>
            </Button>
          </Box>
          <Button variant="contained">
            <Link href="/register" underline="none" color="inherit">
                    Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
