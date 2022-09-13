import React from 'react'
import "./portfolio.css"
//import portfolio images here
const portfolioItems = [
  {
    id: 1,
    //insert portfolio image or gif here
    image: "https://cdn.dribbble.com/userupload/3267904/file/original-4825294b0e393092b4c9b91783117018.jpg?compress=1&resize=640x480&vertical=top",
    title: "Eclipse: Figma Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: "https://cdn.dribbble.com/userupload/3226949/file/original-b2e9075ba8f3a12e977a8c1c0d530dc8.jpg?compress=1&resize=640x480&vertical=top",
    title: "Orion UI Kit",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: "https://cdn.dribbble.com/userupload/3226941/file/original-f551f4b8d9f8e1879ef94c0a48f4bfa8.jpg?compress=1&resize=640x480&vertical=top",
    title: "UI Kit for Data Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    image: "https://cdn.dribbble.com/userupload/3175599/file/original-ac566f0d278344a3d4269fe53fbad683.jpg?compress=1&resize=640x480&vertical=top",
    title: "Data viz",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    image: "https://cdn.dribbble.com/userupload/3226902/file/original-9dd4a06b20869b14bda3b55906c4bf66.jpg?compress=1&resize=640x480&vertical=top",
    title: "Cool Stuff",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    image: "https://cdn.dribbble.com/userupload/3146907/file/original-c64419309a854bd18cf31b0db33ce75b.jpg?compress=1&resize=640x480&vertical=top",
    title: "Fancy Looking Stuff",
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels",
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {portfolioItems.map(({id, image, title, github, demo}) => {
        return (
        <article className='portfolio__item' key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>)
        })
      }
      </div>
    </section >
  )
}

export default Portfolio 