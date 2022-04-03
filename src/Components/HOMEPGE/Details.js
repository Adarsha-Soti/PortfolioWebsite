import React from 'react'
import { Divider, Grid,  List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Details() {
  return (
      <Grid container direction={'column'} style={{backgroundColor:'white'}} className="leftContainer" >
        
        <Grid item className='name'>
            Adarsha Soti
        </Grid>
        <Grid item className='occupation'>
            Web Developer
        </Grid>
        <Divider  style={{marginTop:"10px"}} />
        <Grid item className='contact'>
            <List >
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary="+9779843874579"  />
                </ListItem>
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="aadarshasoti01@gmail.com"  />                                
                </ListItem >
                <a href="https://www.adarshasoti.com.np/" style={{color:"black"}}>
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="www.adarshasoti.com.np" />
                </ListItem>
                </a>
                <a href="https://github.com/Adarsha-Soti"style={{color:"black"}}>
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <GitHubIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Adarsha-Soti"  />
                </ListItem>
                </a>
                <a href="https://www.linkedin.com/in/adarsha-soti-b08158236/" style={{color:"black"}}>
                    <ListItem className='listItem'>
                    <ListItemIcon>
                        <LinkedInIcon/>
                    </ListItemIcon>
                    <ListItemText primary="adarsha-soti-b08158236"  />
                </ListItem>  
                </a>                              
            </List>
        </Grid>
        <Divider  style={{marginTop:"10px"}} />
        <Grid item className='objective'>
            <p>As a final year student, I am looking for web development internship opportunities where I can utilize my technical skills for developing real-life projects and enhance my knowledge in new and emerging technologies of web development.</p>
        </Grid>
        <Divider  style={{marginTop:"10px"}} />
        <Grid item className='social'>
            <List >
                <a href="https://www.facebook.com/katarchock.kokta/" style={{color:"black"}}>
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <FacebookIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Adarsha Soti"  />
                </ListItem>
                </a>
                <a href="https://www.instagram.com/aadarsha_soti_/?hl=en" style={{color:"black"}}>
                <ListItem className='listItem'>
                    <ListItemIcon>
                        <InstagramIcon/>
                    </ListItemIcon>
                    <ListItemText primary="@adarsha_soti"  />
                </ListItem>
                </a>
                                  
            </List>
        </Grid>
      </Grid>    
  )
  
}

