import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 3rem;
  background-color: #ececec;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    padding-top: 1.2rem;
  }
`;

const AboutItemsContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const AboutItem = styled.div`
  height: 80%;
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0000001f;
  padding: 1rem 1.8rem;

  p {
    font-size: 1.5rem;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: calc(100vw - 1.5rem);
    margin: 0.75rem;
    padding: 0.75rem 0.75rem 1.25rem 0.75rem;
  }
`;

const IconContainer = styled.div`
  font-size: 5rem;
`;

export { AboutContainer, AboutItemsContainer, AboutItem, IconContainer };
