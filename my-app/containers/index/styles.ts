import styled from 'styled-components';

export const StyledHome = styled.div`
  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin: 0;
    font-size: 1.4rem;
    text-align: center;
    color: #fff;
  }

  .title b {
    text-transform: capitalize;
    color: #38bdf8;
  }

  .image{
    display: block;
    margin: 10px auto;
  }
`