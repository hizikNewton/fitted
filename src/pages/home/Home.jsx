import React from "react";
import { Icons } from "../../components/Icons/Icons";
import { data } from "../mockData";

import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import {
  FirstDivSummary,
  ProfileContainer,
  ProfileDetails,
  ProfileSummary,
  SecondDivSummary,
} from "./styled";
import human from "../../assets/human.png";
import Tab from "../../components/Tabs";

const Home = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileSummary>
          <div className="img-container">
            <img src={human} alt={"headshot"}></img>
          </div>
          <FirstDivSummary>
            <p>{"Samuel Oladokun"}</p>
            <ProfileDetails>
              <p>
                <span className="profile__key">{"Gender"}</span>
                <span className="profile__value">{data.Gender}</span>
              </p>
              <p>
                <span className="profile__key">{"Location"}</span>
                <span className="profile__value">{data.Location}</span>
              </p>
              <p>
                <span className="profile__key">{"Sew Gender"}</span>
                <span className="profile__value">{data["Sew Gender"]}</span>
              </p>
            </ProfileDetails>
          </FirstDivSummary>

          <SecondDivSummary>
            <div className={"phoneBox"}>
              <Icons Comp={Phone}></Icons>
              <p className="title">
                <span className="title__key">{"Phone Number"}</span>
                <span className="title__value">{data["Phone Number"]}</span>
              </p>
            </div>
            <div className={"phoneBox"}>
              <Icons Comp={Email}></Icons>
              <p className="title">
                <span className="title__key">{"Email Address"}</span>
                <span className="title__value">{data.email}</span>
              </p>
            </div>
          </SecondDivSummary>
        </ProfileSummary>
      </ProfileContainer>
      <Tab />
    </>
  );
};

export default Home;
