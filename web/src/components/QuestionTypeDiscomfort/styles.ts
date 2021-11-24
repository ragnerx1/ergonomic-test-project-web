import styled from 'styled-components';

export const Container = styled.section`
  .choice-container {
    display: flex;
    align-items: center;
    margin: 30px 0;

    p {
      width: 300px;
      font-weight: normal;
    }

    .description {
      display: flex;
      align-items: center;
    }

    div {
      flex: 1;
      display: flex;
      justify-content: space-around;
    }
  }
`;
