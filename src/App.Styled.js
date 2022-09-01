import styled, { css } from "styled-components";

import { createGlobalStyle } from "styled-components";
import KotoriBold from "./assets/fonts/KotoriRose-Bold.otf";
import KotoriRegular from "./assets/fonts/KotoriRose-Regular.otf";

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'KotoriBold';
  src: url(${KotoriBold}) format("otf");
}
@font-face {
  font-family: 'KotoriRegular';
  src: url(${KotoriRegular}) format("otf");
}
`;

export const Header = styled.header`
  .header-container {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 1.87611px 36px rgba(9, 30, 66, 0.05);
    padding: 0px 32px;
  }
  .header-label,
  .header-profile {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
  .header-label {
    button {
      border: none;
      background: #fff;
    }
    h4 {
      font-family: "KotoriRegular";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const Aside = styled.aside`
  height: 100%;
  position: relative;
  background: linear-gradient(
    192.77deg,
    rgba(0, 240, 255, 0.8) -22.81%,
    rgba(83, 118, 255, 0.8) 28.04%,
    rgba(0, 12, 182, 0.8) 114.1%
  );
  box-shadow: 7px 0px 106px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  .avatar {
    display: flex;
  }

  .fist {
    position: absolute;
    bottom: 0;
  }
`;

export const Avatar = styled.div`
  background: #000cb6;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 77px;
  height: 77px;
  border-radius: 50%;
`;

export const AvatarCopy = styled(Avatar)`
  width: 16px;
  height: 16px;
  background: #f4f4f4;
  padding: 16px;
`;

export const Profile = styled.div`
  p {
    margin: 12px;
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height, or 122% */

    text-align: center;
  }
  .avatar {
    justify-content: center;
  }
  text-align: center;
  color: #ffffff;
  .profile__name {
    font-family: "KotoriBold";
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.3px;
    font-feature-settings: "pnum" on, "lnum" on;
  }
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  list-style-type: none;
`;

const activeNavItem = css`
  font-weight: bold;
  background: #ffffff;
  border-radius: 0px 50px 50px 0px;
  width: 75%;
`;

export const NavItem = styled.li`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${(props) => (props.active ? activeNavItem : undefined)};
  .item {
    display: inline-flex;
    align-self: center;
    margin-left: 52px;
    span {
      margin-left: 52px;
    }
  }

  margin: 32px 0;
`;

export const Main = styled.main`
  background: #f9f9f9;
  z-index: 2;
  .main__content_body {
    margin: 93px 161px;
  }
  .handOne {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .handThree {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 23.8922px;
  padding: 57px 30px;
  header {
    text-align: center;
    width: 450px;
    margin: auto;
  }
  .form-content {
    display: flex;
    width: 100%;
  }
`;
