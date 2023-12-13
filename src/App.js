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

// import { useEffect, useState } from 'react'
// import { auth } from './firebase'

function App () {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          {/* <Route exact path='/' element={<H/>} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
