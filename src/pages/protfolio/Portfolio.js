import React, { useState } from 'react'
import './Portfolio.css'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'

const Portfolio = () => {
  // const [projectDialog,setProjectDialog] = useState(false)

  // const ProjectDialog = () => (
  //   <Dialog open ={projectDialog} onClose={()=>setProjectDialog(false)}>
  //     <DialogTitle onClose={()=>setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
  //     <img src='' alt=''/>
  //     <DialogContent>
  //       {projectDialog.description}
  //     </DialogContent>
  //     <DialogActions>
  //       {projectDialog?.links?.map(link => (
  //         <a href={link.link} target ='_blank'>{link.icon}</a>
  //       ))}
  //     </DialogActions>
  //   </Dialog>
  // )
  return (
    <Grid container className='section pb_45 pt_45'>
      {/* titile */}
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Portfolio </h6>
      </Grid>
      {/* tabs */}
      <Grid item xs={12}>
        <Grid container spacing={2} className=''>
          {resumeData.portfolio.map((port) => (
            <Grid item>
              <Grow in timeout={1000}>

                <Card className='customcard'>
                  <CardActionArea>
                    <CardMedia className='customcard_image' image={port.image} title={port.title} />
                    <CardContent>
                      <Typography className='customcard_title'>{port.title}</Typography>
                      <Typography variant='body2' className='customcard_description'>{port.description}</Typography>
                      <a className='link' href="https://github.com/27harshi" target='_blank'>Find Here</a>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>

          )

          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio