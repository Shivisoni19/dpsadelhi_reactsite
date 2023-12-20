import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/flaticon.css';
import './css/font-awesome.min.css';
import './css/hover-min.css';
import './css/iconmoon.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/slick.css';
import './css/style.css';
import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Members from './pages/Members';
import Media from './pages/Media';
import Event from './pages/Event';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Payment from './components/donation/Payment';

// import { useEffect, useState } from 'react'
// import { auth } from './firebase'

function App () {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/members' element={<Members/>} />
          <Route exact path='/media' element={<Media/>} />
          <Route exact path='/events' element={<Event/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/donation' element={<Donation/>} />
          <Route exact path='/payment' element={<Payment/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
