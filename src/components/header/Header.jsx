import React from 'react'
import './header.css'
import CTA from './CTA'
// import me from '../../assets/me-new.png'
import IMG6 from '../../assets/img6.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>C Aishwarya</h1>
          {/* <h5 className="text-light">Software Engineering Undergraduate</h5> */}
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            { <img src={IMG6} alt=''/> }
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header