import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20vw;

  .content {
    margin-top: 80px;

    .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .part-one {
        display: flex;

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

      .header-user {
        width: 15vw;
      }

      div {
        width: 13vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
