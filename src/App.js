import './App.css'
// import './css/bootstrap.css'
// import './css/style.css'
// import './css/classic.css'
// import './css/flexslider.css'
// import './css/font-awesome.css'
// import './css/jquery.bxslider.css'
// import './css/jquery.countdown.css'
// import './css/jquery.fancybox-1.3.4.css'
// import './css/jquery.fancybox.css'
// import './css/magnific-popup.css'
// import './css/responsive.css'
// import './css/settings.css'
// import './css/fonts/fontawesome-webfontba72.svg'
// import './css/fonts/fontawesome-webfontba72.eot'
// import './css/fonts/fontawesome-webfontba72.svg'
// import './css/fonts/fontawesome-webfontba72.ttf'
// import './css/fonts/fontawesome-webfontba72.woff'
// import './css/fonts/fontawesome-webfontd41d.eot'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
import Home from './pages/Home'


// import { useEffect, useState } from 'react'
// import { auth } from './firebase'

function App () {

  return (
    <div>
      <Router>
        {/* <Header /> */}
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
