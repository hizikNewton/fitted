import styled from "styled-components";

export const TabContainer = styled.div`
  margin-top: 30px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "KarlaRegular";
  font-style: normal;
  font-weight: 400;
  button {
    border: none;
    background: none;
    color: #4f4f4f;
    font-size: 1em;
  }
`;

export const TableContainer = styled.div`
  background: #ffffff;
  padding: 24px;
  color: #8a9099;
  margin-top: 20px;
  .topActions {
    display: flex;
    column-gap: 24px;
    input {
      width: fill-available;
      padding: 4px 44px;
      :focus {
        outline: none;
      }
    }
    select {
      width: 104px;
    }
  }
  .input-wrapper {
    position: relative;
    width: fill-available;
    svg {
      position: absolute;
      box-sizing: border-box;
      margin: 0 12px;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 10px;
  tr {
    td {
      text-align: center;
    }
  }
`;
