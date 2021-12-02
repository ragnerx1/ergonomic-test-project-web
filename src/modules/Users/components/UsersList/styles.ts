import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: 20px;

  .column-3 {
    width: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column-4,
  .column-5 {
    margin-left: 30px;
    width: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: none;
      background-color: transparent;
      width: 50px;
    }
  }
`;
