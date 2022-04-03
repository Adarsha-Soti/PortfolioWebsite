import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from '@mui/material';
export default function Card1() {
  return (
    <div className='pro-container'>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-container" raised>
            <CardMedia component="img" alt="project" image="https://i.imgur.com/jjBzUd2.gif" height="200px" style={{objectFit:"contain"}}/>
              <CardContent style={{paddingBottom:"5px"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                      My Portfolio
                  </Typography>
                  <Divider/>
                  <Typography variant="body2" component="p">
                          It is an MERN full stack app for my Portfolio.The sole purpose for creating this website Is to apply for Intern and JOB vacancies.
                  </Typography>
                  <Divider/>
                  <CardActions disableSpacing>
                      
                      <a href="https://www.adarshasoti.com.np">
                          <Button size="small">
                              View Live
                          </Button>
                      </a>
                  </CardActions>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-container" raised>
            <CardMedia component="img" alt="project" image="https://i.imgur.com/ZtfRPqu.gif" height="200px" style={{objectFit:"contain"}}/>
              <CardContent style={{paddingBottom:"5px"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                      
                  </Typography>
                  <Divider/>
                  <Typography variant="body2" component="p">
                          It is an MERN full stack app for my home shop Santosh Sakar Pustak Pasal. I created this website so that our customers can order the book online.
                  </Typography>
                  <Divider/>
                  <CardActions disableSpacing>
                      
                      <a href="https://santoshsakar.netlify.app/">
                          <Button size="small">
                              View Live
                          </Button>
                      </a>
                  </CardActions>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-container" raised>
            <CardMedia component="img" alt="project" image="https://i.imgur.com/ZtfRPqu.gif" height="200px" style={{objectFit:"contain"}}/>
              <CardContent style={{paddingBottom:"5px"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                      Santosh Sakar Pustak Pasal Website
                  </Typography>
                  <Divider/>
                  <Typography variant="body2" component="p">
                          It is an MERN full stack app for my home shop Santosh Sakar Pustak Pasal. I created this website so that our customers can order the book online.
                  </Typography>
                  <Divider/>
                  <CardActions disableSpacing>
                      
                      <a href="https://santoshsakar.netlify.app/">
                          <Button size="small">
                              View Live
                          </Button>
                      </a>
                  </CardActions>
              </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
    
  );
}
