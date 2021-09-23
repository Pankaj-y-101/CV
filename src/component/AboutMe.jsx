import React from 'react'
import {Box,makeStyles,Typography,Slider} from "@material-ui/core";

const useStyles=makeStyles({
    parent:{
        backgroundColor:'#e600e6',
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
        background:'#a64dff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginRight:'0.5rem',
    },
    field1_about:{
        height:'15rem',
        width:'15rem',
        border:'0.5rem solid #cc33ff',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:'#600080',
    },
    field1_about_me:{
        fontSize:'2.5rem'
    },
    field2:{
        width:'45%',
        height:'131vh',
        marginTop:'0.6rem',
        background:'linear-gradient(to right,#ff00ff,#73264d,#ff00ff)',
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
        color:'#b3ffe0',
        fontSize:'1.3rem',
    },

    line:{
        width:'10rem',
        height:'0.2rem',
        background:'linear-gradient(to right,#73264d,magenta,white,#b30000,#0000b3,#ff4da6)',
    },
    skill_value:{
        background:'#b300b3',
        width:'29rem',
        borderRadius:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    skill_head:{
        width:'23rem',
        display:'flex', 
        color:'white',
        fontSize:'1rem', 
    },
})

const AboutMe = () => {
    const classes=useStyles();
    return (
        <div>
            <Box maxWidth="sm" className={classes.parent}>
            <Typography className={classes.field1}>
                <Typography className={classes.field1_about}>
                <Typography className={classes.field1_about_me}>About Me</Typography>
                </Typography>
                </Typography>
                
            <Typography className={classes.field2}>
            <Typography variant='h6' className={classes.field2_content}>Job Objective</Typography>
            <Typography className={classes.line}></Typography>
            <Typography variant='p'>
            <Typography className={classes.field2_content_para}>To work in creative and 
            challenging environment where I will be able to extract maximum knowledge 
            from the available resources and enhance my technical skills, simultaneously 
            deploying my knowledge for the growth of organization and myself.</Typography>
            </Typography>

    <Box className={classes.skill_value}>
    <Typography variant='h6' className={classes.field2_content}>Technical Skills</Typography>
    <Typography className={classes.line}></Typography>
    <Typography className={classes.skill_head}>React.js:<Slider disabled defaultValue={55} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    <Typography className={classes.skill_head}>Bootstrap:<Slider disabled defaultValue={55} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    <Typography className={classes.skill_head}>HTML5:<Slider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    <Typography className={classes.skill_head}>CSS3:<Slider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    <Typography className={classes.skill_head}>JavaScript:<Slider disabled defaultValue={45} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    <Typography className={classes.skill_head}>SQL:<Slider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" /></Typography>
    </Box>

    <Typography variant='h6' className={classes.field2_content}>Cover Letter</Typography>
    <Typography className={classes.line}></Typography>
    <Typography variant='p'>
    <Typography className={classes.field2_content_para}>I am able to use efficient procedures 
    and practices for transforming raw data into a graphical interface by using a combination of HTML, CSS, and JavaScript in such a way
    so that users can view and interact with the data.</Typography>
    </Typography>
         </Typography>
        </Box>
        </div>
    )
}
export default AboutMe;
