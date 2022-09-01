import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  ::before {
    content: "";
    position: absolute;
    height: 150px;
    top: -55px;
    width: 100%;
    z-index: -1;
    background: linear-gradient(
      192.77deg,
      rgba(0, 240, 255, 0.8) -22.81%,
      rgba(83, 118, 255, 0.8) 28.04%,
      rgba(0, 12, 182, 0.8) 114.1%
    );

    border-radius: 20px;
  }
`;
export const ProfileSummary = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  margin: 0 25px;
  padding: 22px;
  .img-container {
    border-radius: 21px;
    padding: 16px;
    position: relative;
    top: -75px;
    background: #fff;
  }
`;

export const FirstDivSummary = styled.div``;

export const SecondDivSummary = styled.div`
  display: flex;
  column-gap: 1em;
  .phoneBox {
    padding: 35px;
    display: flex;
    align-items: center;
    span {
      display: block;
    }
  }
`;
