import React from 'react'
import {makeStyles,Typography,Box} from '@material-ui/core';
const useStyles=makeStyles({
    parent:{
        background:'linear-gradient(#0033cc,#e6ffe6,#e6ffff,#ffffcc,#e6ffe6)',
        height:'95vh',
        borderRadius:'5%',
        marginTop:'0.6rem',
        display:'flex',
        justifyContent:'center',
    },
    child:{
        background:'linear-gradient(#0033cc, #b3003b)',
        width:'55%',
        height:'65vh',
        borderRadius:'5%',
        marginTop:'0.6rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
})
const Contact = () => {
    const classes=useStyles();
    return (
        <div>
            <Box maxWidth="sm" className={classes.parent}>
            <Typography className={classes.child}>
                <Typography style={{fontSize:'2rem',color:'white',fontWeight:'bold'}}>Email: pankajy101.pr@gmail.com </Typography>
                <Typography style={{fontSize:'2rem',color:'white',fontWeight:'bold'}}>Mob No: 7977189693 </Typography>
                <Typography style={{fontSize:'2rem',color:'white',fontWeight:'bold'}}>GitHub:https://github.com/Pankaj-y-101</Typography>
                </Typography> 
                </Box>
        </div>
    )
}

export default Contact
