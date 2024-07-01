import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Fashion Gallery</h3>
            <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aish-0204/FashionGallery" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Beauty Garden</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aish-0204/Beauty-Garden" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
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