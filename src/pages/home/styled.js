import styled from "styled-components";

export const ProfileContainer = styled.div`
  color: #828282;
  display: block;
  position: relative;
  width: fit-content;
  ::before {
    content: "";
    position: absolute;
    height: 150px;
    top: -55px;
    width: 100%;
    z-index: -1;
    background: #f2f4f9;

    border-radius: 20px;
  }

  .btn-cta {
    display: none;
  }
  @media (max-width: 768px) {
    button.btn-cta {
      display: block;
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
`;
export const ProfileSummary = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  margin: 0 10px;
  padding: 10px;
  height: 100px;
  width: fit-content;
  .img-container {
    border-radius: 21px;
    padding: 8px;
    position: relative;
    top: -50px;
    background: #fff;
    img {
      width: 85px;
      height: 85px;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;

    .img-container {
      top: 0;
    }
  }
`;

export const FirstDivSummary = styled.div`
  :first-child {
    color: #3f434a;
    font-size: 14px;
    line-height: 28px;
    font-family: KotoriBold;
    margin-bottom: 5px;
  }
`;

export const ProfileDetails = styled.div`
  p {
    display: flex;
    align-items: center;
    span.profile__key {
      width: 80px;
      font-family: KotoriRegular;
      font-size: 12px;
      line-height: 20px;
    }
    span.profile__value {
      font-family: KarlaRegular;
      font-size: 10px;
      color: #4f4f4f;
    }
  }
`;

export const SecondDivSummary = styled.div`
  display: flex;
  column-gap: 1em;
  .phoneBox {
    padding: 25px;
    display: flex;
    align-items: center;
    span {
      display: block;
    }
    svg {
      width: 40px;
      height: 40px;
    }
   
  }  @media (max-width: 768px) {
    flex-direction:column;
    .phoneBox{
      padding: 0px;
    }
  }
  p.title {
    margin-left:10px;
    title__key {
      font-family:"KotoriBold"
      font-size: 14px;
      color: #828282;
    }
    title__value {
      font-family:"KarlaRegular"
      font-size: 12px;
      color: #4F4F4F;;
    }
  }
`;
