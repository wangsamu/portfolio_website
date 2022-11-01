import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 3rem;
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

  > div {
    height: 80%;
    width: 30%;
    border: 10px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
  }
`;

export { AboutContainer, AboutItemsContainer };
