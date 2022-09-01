import styled, { css } from "styled-components";

export const Form = styled.div`
  width: 50%;
  .first-row {
    display: flex;
    column-gap: 37px;
    div {
      width: 50%;
      input {
        width: fill-available;
      }
    }
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  > div {
    margin-bottom: 20px;
  }

  .input-wrapper {
    position: relative;
    svg {
      position: absolute;
      box-sizing: border-box;
      margin: 0 12px;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
    }
  }
  input,
  select {
    width: fill-available;
    padding: 14px;
    padding-left: 48px;
    border: 1px solid #bdbdbd;
    border-radius: 7px;
  }
  select {
    padding-left: 18px;
  }
  .submit-btn {
    button {
      background: #b7076b;
      border-radius: 7px;
      padding: 17px 21px;
      border: none;
      font-style: italic;
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.5px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .error {
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #d90000;
  }
`;

export const Story = styled.div`
  width: 50%;
  .img-container {
    background: #fff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 47px;
    width: fit-content;
    margin-bottom: 60px;
    img {
      padding: 16px;
      border-radius: 21px;
      width: 100px;
      height: 100px;
    }
  }
  .user-story {
    div.item {
      width: 100%;
      display: flex;
      margin-block: 10px;
      span.item_key {
        width: 200px;
      }
    }
  }
`;

export const itemStyle = css`
  width: 100%;
  padding: 0;
  height: fit-content;
  max-height: 200px;
  overflow-y: scroll;
`;
export const containerStyle = css`
  width: 100%;
  z-index: 2;
`;
