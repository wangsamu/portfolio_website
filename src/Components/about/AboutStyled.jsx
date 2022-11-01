import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 3rem 0 0 0;
  background-color: #ececec;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutItemsContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
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
`;

const IconContainer = styled.div`
  font-size: 5rem;
`;

export { AboutContainer, AboutItemsContainer, AboutItem, IconContainer };
