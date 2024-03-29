import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Designed and Developed by Harshitha
          <br/>
          clone idea from <a href='https://themeforest.net/user/tavonline' target='blank'>tavonline</a>
        </Typography>
      </div>
      </div>
  )
}

export default Footer