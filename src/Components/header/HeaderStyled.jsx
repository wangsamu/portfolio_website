import styled from 'styled-components';
import ME from '../../assets/bruce_contact3.jpg';

const HeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${ME});
  background-color: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: white;

  > div {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35%;
    right: 20%;
    white-space: pre-line;

    > h1 {
      font-size: 3.5rem;
      margin: 2rem 0 2rem 0;
    }

    > h5 {
      margin-left: 2rem;
    }
  }
`;

export { HeaderContainer };
