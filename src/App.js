import React from 'react'
import { Container, Grid } from '@mui/material'
import Profile1 from './components/Profile/Profile1'
import Portfolio from './pages/protfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import Footer from './components/Footer/Footer'
import Head from './components/Header/Head'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}  >
          <Profile1 />

        </Grid>
        <Grid item xs>

          <BrowserRouter>
          <Head />
          <div className='main-content'>
          <Routes>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/' element= {<Resume/>}/>
          </Routes>
          </div>
          </BrowserRouter>


         
          
          <Footer />


        </Grid>
      </Grid>

    </Container>


  )
}

export default App