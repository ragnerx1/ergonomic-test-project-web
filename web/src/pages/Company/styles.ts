import styled from 'styled-components';

export const Container = styled.div`
  section {
    margin-top: 80px;

    div {
      display: flex;
      align-items: center;

      .input-container {
        margin-left: 50px;
        background-color: #f7f7f7;
        padding: 10px 15px;
        border-radius: 25px;

        input {
          margin-left: 5px;
          background-color: transparent;
          border: none;
        }
      }
    }

    h1 {
      font-size: 30px;
    }

    .header-table {
      display: flex;
      align-items: center;
      background-color: #f7f7f7;
      padding: 7px;
      margin-top: 40px;

      div {
        width: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    section {
      display: flex;
      margin: 10px 0;

      .id {
        width: 15vw;
      }

      .company {
        width: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .option {
        width: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border: none;
          background-color: transparent;
          width: 50px;
        }
      }
    }
  }
`;
