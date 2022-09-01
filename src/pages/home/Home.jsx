import React from "react";
import { Icons } from "../../components/Icons/Icons";
import { data } from "../mockData";

import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import {
  FirstDivSummary,
  ProfileContainer,
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
            <div>
              <p>
                <span>{"Gender"}</span>
                <span>{data.Gender}</span>
              </p>
              <p>
                <span>{"Gender"}</span>
                <span>{data.Gender}</span>
              </p>
              <p>
                <span>{"Gender"}</span>
                <span>{data.Gender}</span>
              </p>
            </div>
          </FirstDivSummary>

          <SecondDivSummary>
            <div className={"phoneBox"}>
              <Icons Comp={Phone}></Icons>
              <p>
                <span>{"Phone Number"}</span>
                <span>{data["Phone Number"]}</span>
              </p>
            </div>
            <div className={"phoneBox"}>
              <Icons Comp={Email}></Icons>
              <p>
                <span>{"Email Address"}</span>
                <span>{data.email}</span>
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
