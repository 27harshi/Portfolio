import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { TimelineContent, TimelineItem } from '@mui/lab';
import CustomButton from '../Button/Button'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const CustomTimelineItem = ({title,text,link}) => (
<TimelineItem>
<CustomTimelineSeparator/>
<TimelineContent className='timeline_content'>
 {link ? (
  <Typography className='timelineItem_text'>
    <span>{title}:</span>{" "}
    <a href={link} target='_blank'>
      {text}
    </a>
  </Typography>
 ) : (
  <Typography className='timelineItem_text'>
    <span>{title}:</span>{text}
  </Typography>
 )}
</TimelineContent>
</TimelineItem>
);

const Profile1 = () => {
  return (
    <div className='profile cointerner_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/harsh.jpg')} alt='' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonPinIcon/>}>
          <CustomTimelineItem title="name" text={resumeData.name}/>
          <CustomTimelineItem title="title" text={resumeData.title}/>
          <CustomTimelineItem title="email" text={resumeData.email}/>
{Object.keys(resumeData.socials).map((key)=>(
<CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
))}
        </CustomTimeline>
        <div className='button_container' style={{display:'flex'}}>

        <CustomButton text={"Download cv"} icon ={<DownloadForOfflineIcon/>}/>
        </div>
      </div>


    </div>
  )
}

export default Profile1