import {AppBar,Toolbar,makeStyles,Typography} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyle=makeStyles({
    header:{
        background:'linear-gradient(to right,#b32d00,#f6f6ee,#f9f2ec,#b30059)',
    },
    tabs:{
        marginRight:'5rem',
        cursor:'pointer',
        fontWeight:'bold',
        textDecoration:'none',
        color:'black',
        fontSize:'1.1rem'
    },
})
const Navbar=()=>{
    const classes=useStyle();
    return(
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                   <Typography><NavLink className={classes.tabs} to="/">CV</NavLink></Typography>
                   <Typography><NavLink className={classes.tabs} to="/about">About Me</NavLink></Typography>
                   <Typography><NavLink className={classes.tabs} to="/project">Completed Projects</NavLink></Typography>
                   <Typography><NavLink className={classes.tabs} to="/contact">Contact</NavLink></Typography>
                </Toolbar>
            </AppBar> 
        </div>
    )
}

export default Navbar;