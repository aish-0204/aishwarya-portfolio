import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/c-aishwarya-5529a0250/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/aish-0204" target="_blank" rel='noreferrer'><BsGithub/></a>
        {/* <a href="https://medium.com/@aishwarya2000" target="_blank" rel='noreferrer'><BsMedium/></a> */}
    </div>
  )
}

export default HeaderSocials