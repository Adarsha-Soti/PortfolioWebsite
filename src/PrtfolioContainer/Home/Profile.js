import { Grid, Typography } from '@mui/material';
import React from 'react';
import Typical from 'react-typical'
import './Profile.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Profile() {
  return (
            <Grid container style={{paddingTop:"30px"}} >
                <Grid item xs={12} sm={5} md={4} className="profile-parent" >
                    <div>
                        <div className='profile-picture'>
                            <div className='profile-picture-background'>
                            </div>
                        </div>
                    </div>
                </Grid>
             <Grid item  xs={12}  sm={7} md={6} className="profile-parent">
                   <div className='profile-details'>
                   <a href='https://www.facebook.com/katarchock.kokta'>
                       <FacebookIcon className='onHover'/>
                       </a>
                       <a href='https://www.instagram.com/aadarsha_soti_/'>
                       <InstagramIcon className='onHover'/>
                       </a>
                       <a href='https://github.com/Adarsha-Soti'>
                       <GitHubIcon className='onHover'/>
                       </a>
                       <a href='https://www.linkedin.com/in/adarsha-soti-b08158236/'>
                       <LinkedInIcon className='onHover'/>
                       </a>
                  <Typography variant ="h5">
                    <span className='primary-text'>
                        Hello, I'm <span className='highlighted-text'>Adarsha Soti</span>
                    </span>
                    </Typography>
                    
                          <Typography variant='h4' style={{fontFamily:"URW Chancery L, cursive"}} >
                           <Typical
                           loop={Infinity}
                           steps={[
                               "Ethusiastic software developer ",2000,
                               "with react js frontend",2000,
                               " & node js backend ",2000
                           ]}
                           />
                           </Typography>
                    <Typography variant='h5' style={{fontFamily:"Courier, monospace"}}>
                         PASSIONATED ABOUT WEB APPLICATION DEVELOMENT
                    </Typography>  
                <div className='profile-options'>
                    <a href='https://www.linkedin.com/in/adarsha-soti-b08158236/' >
                        <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        </a>
                    <a href='cv.pdf' download="aadarshacv.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
                </Grid>
            </Grid>

  )
}
