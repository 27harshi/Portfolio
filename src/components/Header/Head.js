import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeRounded, Telegram } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css'

const Head = (props) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : "header_link"}>
            Resume
          </Nav.Link>
          {/* portfolio link */}
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : "header_link"}>
            portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right' >
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank' >
                {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton  text={"Hire Me" }icon={<Telegram/>} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default  Head;