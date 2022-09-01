import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  ${(props) => props?.overrideStyle ?? undefined};
`;

export const DDBox = styled.ul`
  width: 176px;
  height: 79px;
  margin: 0;
  position: absolute;
  list-style-type: none;
  padding: 24px;
  background: #fff;
  filter: drop-shadow(0px 20px 50px rgba(44, 63, 88, 0.15));
  border-radius: 14px;
  ${(props) => props?.overrideStyle ?? undefined};
`;

export const DDItem = styled.li`
  padding: 9px 11px;
  cursor: pointer;
  :hover {
    background: #f8f8f8;
  }
`;
