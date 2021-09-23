import React from "react";
import {Box,makeStyles,Typography,Avatar} from "@material-ui/core";
import avatar from './image/avatar.png'
const useStyles=makeStyles({
    parent:{
        // background:'linear-gradient(to right, #b3ffb3,#e6ffe6,#e6ffff,#ffffcc,#e6ffe6)',
        backgroundColor:'#d9b3ff',
        height:'145vh',
        borderRadius:'5%',
        marginTop:'0.6rem',
        display:'flex',
        justifyContent:'center',
    },
    field1:{
        width:'45%',
        height:'65vh',
        marginTop:'0.3rem',
        background:' #f2f2f2',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginRight:'0.5rem',
    },
    avatar_img:{
        height:'15rem',
        width:'15rem',
        border:'0.5rem solid #cc33ff',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'#600080',
    },
    img:{
        width:'9rem',
        height:'9rem',
    },
    field2:{
        width:'45%',
        height:'131vh',
        marginTop:'0.6rem',
        background:' #666666',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius:'2rem',
    },
    field2_content:{
        float:'left',
        fontSize:'2rem',
        fontWeight:'bold',
        fontFamily:`Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`,
        padding:'0.5rem',
    },
    field2_content_para:{
        color:'#b3e6cc',
        fontSize:'1.5rem',
    },

    line:{
        width:'10rem',
        height:'0.2rem',
        background:'linear-gradient(to right,#00b36b,#b300b3,#73264d,#e6ffe6,#e6ffff,#0000cc,#e6ffe6)',
    },
})
const Cv = () => {
    const classes=useStyles();
    return (
        <div>
            <Box maxWidth="sm" className={classes.parent}>
            <Typography className={classes.field1}>
                <Typography variant="h3">Welcome to my profile</Typography>
                <Typography className={classes.avatar_img}>
                <Avatar className={classes.img} alt="Example Alt" src={avatar} />
                </Typography>
                <Typography variant="h6" style={{fontWeight:'bold'}}>Pankaj Yadav</Typography>
            </Typography>

            <Typography className={classes.field2}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'2rem',padding:'1rem'}}>Front-End Developer</Typography>
            <Typography className={classes.line}></Typography>
            <Typography variant='h6' className={classes.field2_content}>Personal Details:</Typography>
            <Typography className={classes.line}></Typography>

            <Typography variant='p'>
            <Typography className={classes.field2_content_para}>Name              :	Pankaj Baldevprasad Yadav</Typography>
            <Typography className={classes.field2_content_para}>Date of Birth     :	May 28,1997</Typography>
            <Typography className={classes.field2_content_para}>Permanent Address :   Shree Apt Room NO 113, Vrindavan Dham,                                                 
                                            pin-code-13306, Maharashtra(Mumbai).                                       
            </Typography>
            </Typography>
            <Typography variant='h6' className={classes.field2_content}>Academic  Profile</Typography>
            <Typography className={classes.line}></Typography>
            <Typography variant='p'>
            <Typography className={classes.field2_content_para}>M.Sc. (CS) : B.K. Birla College(MU), Year of passing 2020 with 80.16% Percentage.</Typography>
            <Typography className={classes.field2_content_para}>B.Sc. (IT)  : B.K. Birla College(MU), Year of passing 2017 with 61.22% Percentage.</Typography>
            <Typography className={classes.field2_content_para}>H.S.C. : Maharashtra State Board, Year of passing 2014.</Typography>
            <Typography className={classes.field2_content_para}>S.S.C. : Maharashtra State Board, Year of passing 2012.</Typography>
            </Typography>
            </Typography>
        </Box>
        </div>
    )
}

export default Cv
