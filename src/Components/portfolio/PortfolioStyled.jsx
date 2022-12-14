import styled from 'styled-components';

const PortfolioContainer = styled.div`
  height: 100%;
  width: 100vw;
  padding: 3rem;
  background-color: black;
  color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    height: 100%;
    padding: 2rem 1rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

const PortfolioItemsContainer = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
  }
`;

const PortfolioItem = styled.div`
  background: rgba(236, 232, 232, 0.818);
  color: black;
  padding: 1.3rem;
  border-radius: 1.2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border: 2px solid white;
    color: white;
    background: transparent;
  }

  && p {
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    height: fit-content;
    width: calc(100vw - 1.5rem);
    margin: 0.75rem;
    padding: 0.75rem 0.75rem 1.25rem 0.75rem;
  }
`;

export { PortfolioContainer, PortfolioItemsContainer, PortfolioItem };
