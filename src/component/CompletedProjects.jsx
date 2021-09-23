import React from 'react';
import {Box,makeStyles,Typography,Avatar} from "@material-ui/core";
import logo from './image/logo.PNG'

const useStyles=makeStyles({
    parent:{
        background:'linear-gradient(to right, #b3ffb3,#e6ffe6,#e6ffff,#ffffcc,#e6ffe6)',
        // backgroundColor:'#ff1aff',
        height:'160vh',
        borderRadius:'5%',
        marginTop:'0.6rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    field1:{
        width:'75%',
        height:'71vh',
        marginTop:'1rem',
        background:'linear-gradient(#a64dff,#e60073)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    field1_child:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // border:'2px solid indigo',
        width:'25rem',
        padding:'2rem'
    },
    field2:{
        width:'41%',
        height:'71vh',
        marginTop:'0.3rem',
        background:'linear-gradient(#a64dff,#e60073)',
        display:'flex',
    },
    field2_child:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // border:'2px solid indigo',
        width:'25rem',
        padding:'2rem',
    },
    image:{
        width:'9rem',
        height:'9rem',
    },
})
const CompletedProjects = () => {
    const classes=useStyles();
    return (
        <div>
            <Box maxWidth="sm" className={classes.parent}>
              <Typography className={classes.field1}>
              <Typography className={classes.field1_child}>
        <Avatar className={classes.image} src={logo}/>
          <Typography variant="h5" component="div">React-Portfolio Website</Typography>
          <Typography variant="p" component="div">This is Portfolio page made using React.js. 
          It include React Router which is a standard library for routing in React. 
          It enables the navigation among various components in a React Application.</Typography >
        </Typography>
              <Typography className={classes.field1_child}>
        <Avatar className={classes.image} src={logo}/>
          <Typography variant="h5" component="div">futureai</Typography>
          <Typography variant="p" component="div">This Landing page made using JavaScript 
          library- React.js. This shows the information so that user can choose services 
          according to their need.This is a follow up to any promises that we have made to 
          our customer.</Typography >
        </Typography>

              </Typography> 

              <Typography className={classes.field2}>
              <Typography className={classes.field1_child}>
        <Avatar className={classes.image} src={logo}/>
          <Typography variant="h5" component="div">CRUD</Typography>
          <Typography variant="p" component="div">The add and edit buttons navigate 
          to a page containing a React Hook Form for creating or updating a user record, 
          and the delete button executes a function within the user list component to 
          delete the user record.</Typography >
        </Typography>
                  </Typography>  
            </Box>
        </div>
    )
}
export default CompletedProjects;
