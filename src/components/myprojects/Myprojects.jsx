import React from 'react'
import './myprojects.css'
import IMG5 from '../../assets/img5.png'
import IMG2 from '../../assets/img2.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

      
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Portfolio</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aish-0204/aishwarya-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Todo List</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aish-0204/todo-list" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
      </div>
    </section>
  )
}

export default Myprojects