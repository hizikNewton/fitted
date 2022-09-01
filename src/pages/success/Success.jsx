import React from "react";
import { Content } from "../../App.Styled";
import SuccessImage from "../../assets/success.png";
import { SucessContainer } from "./styled";

export const Success = () => {
  return (
    <Content className="content">
      <SucessContainer>
        <div>
          <img src={SuccessImage} alt={"successful"} />
        </div>

        <div className="sucess-txt">
          <h3>{"Yay!!!"}</h3>
          <p>
            {`Yay!!! 🎉 Your application to become a vetted tailor has been sent, a
          Fitted Agent will get in touch with you regard the next steps.
          Goodluck!`}
          </p>
        </div>
        <div className="btn-cta">
          <button>{"Return to Dashboard"}</button>
        </div>
      </SucessContainer>
    </Content>
  );
};
