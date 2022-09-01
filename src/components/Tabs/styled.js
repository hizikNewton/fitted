import styled from "styled-components";

export const TabContainer = styled.div`
  margin-top: 70px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

export const TableContainer = styled.div`
  background: #ffffff;
  padding: 24px;
  margin-top: 40px;
  .topActions {
    display: flex;
    column-gap: 24px;
    input {
      width: fill-available;
    }
    select {
      width: 104px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 24px;

  tr {
    td {
      text-align: center;
    }
  }
`;
