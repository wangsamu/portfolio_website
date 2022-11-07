import React from 'react';
import './portfolio.css';
import { portfolioItems } from './portfolioItems';
import { PortfolioContainer, PortfolioItemsContainer } from './PortfolioStyled';

const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <h1>- My Projects -</h1>

      <PortfolioItemsContainer>
        {portfolioItems.map(
          ({ id, image, title, description, github, demo }) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-primary' target='_blank'>
                    Github
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank'>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </PortfolioItemsContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
