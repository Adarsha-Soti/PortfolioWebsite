import { Grid } from '@mui/material'
import React from 'react'
import Card1 from '../../Components/HOMEPGE/Card1'
import Details from '../../Components/HOMEPGE/Details'
 import Skills1 from '../../Components/Skills1'
import Footer from './Footer/Footer'
import './Home.css'
import Profile from './Profile'

export default function Home() {
  return (
    <div className='home-container' >
          <Grid container direction={'column'}>
            <Grid item >
              <Profile/>
              <Footer/>
            </Grid>
            <Grid container style={{backgroundColor:"white"}}>
            <Grid item sm={12} md={4}  className='leftContainer'>
               <Details/>
            </Grid>
            <Grid item sm={12} md={8}  className='rightContainer'>
              <Skills1/>
            </Grid>
            </Grid>
            <Grid item >
              <Card1/>
            </Grid>
          </Grid>
    </div>
  )
}
