import styled from 'styled-components';

const MainWrapper = styled.div`
  .main-wrapper {
    display: grid;
    height: 100vh;
    margin: 0 auto;
    z-index: 10;
    background-color: var(--white);
    box-shadow: var(--main-shadow);
  }

  @media screen and (min-width: 1440px) {
    .main-wrapper {
      height: 95vh;
    }
  }
`;

export default MainWrapper;
