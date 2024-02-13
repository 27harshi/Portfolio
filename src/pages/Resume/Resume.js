import React from 'react'
import { Grid, Paper, TextField, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData';
import './Resume.css'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import StorageIcon from '@mui/icons-material/Storage';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import CustomButton from '../../components/Button/Button'


const Resume = () => {
  return (
    <>
      {/* about me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* education and projects */}
      <Grid container className='section'>
        <Grid item className='section_title  mb_30' >
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* projects */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={'PROJECTS'} icon={<StorageIcon />}>
                {resumeData.projects.map((project) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className='timeline_content'>
                        <Typography className='timeline_title'>
                          {project.title}
                        </Typography>
                        <Typography variant='caption'
                          className='timeline_tech'>
                          {project.tech}
                        </Typography>
                        <Typography variant='body2'
                          className='timeline_description'>
                          {project.description}
                        </Typography>

                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </CustomTimeline>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={'EDUCATION'} icon={<SchoolIcon />}>
                {resumeData.education.map((educ) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className='timeline_content'>
                        <Typography className='timeline_title'>
                          {educ.title}
                        </Typography>
                        <Typography variant='caption'
                          className='timeline_tech'>
                          {educ.date}
                        </Typography>
                        <Typography variant='body2'
                          className='timeline_description'>
                          {educ.university}
                        </Typography>

                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container className='section '>
        <Grid container>
          <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Skills</h6>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}
        justifyContent={'space-between'}
        className='section graybg pb_45'>
        {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skills_title'>
                {skill.title}</Typography>
              {skill.description.map((element) => (
                <Typography variant='body2' className='skill_description'>
                  <TimelineDot variant='outlined' className='timeline_dot' />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}

      </Grid>
{/* contact */}
      <Grid container spacing={5} className='section pt_45 pb_45'>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='Name' label="Name"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label="E-mail"/>
                </Grid>
                <Grid item xs={12} >
                  <TextField fullWidth name='message' label="Messege" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text ="Submit"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      {/* contact information */}
      <Grid item xs={12} lg={5}>
        <Grid container > 
        <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className='contactinfo_item'>
                    <span>Address :</span>{resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo_item'>
                    <span>phone :</span>{resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo_item'>
                    <span>Email : harshithachandrappa9@gmail.com </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      

    </>
  )
}

export default Resume;