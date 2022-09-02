import React, { useEffect, useRef, useState } from "react";

import human from "../../assets/human.png";
import { Content } from "../../App.Styled";
import { data } from "../mockData";
import { ReactComponent as Bank } from "../../assets/bank.svg";
import { ReactComponent as Pad } from "../../assets/pad.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import Icons from "../../components/Icons";
import DropDown from "../../components/DropDown";
import { itemStyle, containerStyle, Form, Story } from "./styled";
import useOnClickOutside from "../../hooks/UseOnClickOutside";
import { resolveBankData } from "../../service/https";

const Vettedapplication = ({ setApplicaation }) => {
  const [formData, setFormData] = useState({
    bankName: "",
    bankCode: "",
    accountName: "",
  });
  const [bankData, setBankData] = useState();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [filterData, setFilterate] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const ref = useRef();
  useOnClickOutside(ref, () => setMenuOpen(false));
  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicaation("success");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "bankName") {
      console.log(bankData);
      const filterate = bankData.filter(({ name }) =>
        name.toLowerCase().includes(value)
      );
      setFilterate(filterate);
    }
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  useEffect(() => {
    fetch("https://fitted-staging-api.herokuapp.com/api/v1/bank/banks")
      .then((response) => response.json())
      .then(({ data }) => setBankData(data));
  }, []);

  const handleClick = (e, value, others) => {
    setFormData((fd) => ({
      ...fd,
      bankName: value,
      bankCode: others.code ?? "",
    }));
  };
  const handleBlur = () => {
    const { bankCode, accountNo } = formData;
    resolveBankData({ data: { bankCode, accountNo } })
      .then((res) => {
        console.log(res);
        if (res?.status) {
          const {
            content: { data },
          } = res;
          setFormData((fd) => ({
            ...fd,
            accountName: data.account_name,
          }));
        } else {
          setErrMsg(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = () => {
    setFormData((fd) => ({
      ...fd,
      accountName: "",
    }));
    setErrMsg("");
  };
  return (
    <Content className="content">
      <header>
        <h4>{"Vetted Tailor Application"}</h4>
        <p>
          {
            "One step closer to the goal! please provide us with your Bank details with which you will be recieving payment."
          }
        </p>
      </header>
      <div className="form-content">
        <Story>
          <div className="story-img">
            <div className="img-container">
              <img src={human} alt={"display-shot"} />
            </div>
            <div className="user-story">
              {Object.entries(data).map(([keys, values], idx) => {
                return (
                  <div className="item" keys={idx}>
                    <span className="item_key">{keys}</span>
                    <span className="item_value">{values}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Story>
        <Form onChange={resetForm}>
          <div className="first-row">
            <div>
              <label>{"Gender you sew for"}</label>
              <select>
                <option>{"Male"}</option>
                <option>{"Female"}</option>
              </select>
            </div>
            <div>
              <label>{"Styles you Sew?"}</label>
              <select>
                <option>{"Please Select"}</option>
              </select>
            </div>
          </div>
          <div ref={ref}>
            <label>{"Bank Name"}</label>
            <div className="input-wrapper">
              <Icons Comp={Bank} />
              <input
                placeholder="Please select your bank"
                onChange={handleInputChange}
                onClick={() => setMenuOpen(true)}
                name={"bankName"}
                value={formData.bankName ?? ""}
              />
              {Boolean(filterData) && isMenuOpen && (
                <DropDown
                  style={{ itemStyle, containerStyle }}
                  listItem={filterData}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div>
          <div>
            <label>{"Account Number"}</label>
            <div className="input-wrapper">
              <Icons Comp={Pad} />
              <input
                name={"accountNo"}
                placeholder="Please input your account number"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formData.accountNo ?? ""}
              />
            </div>
          </div>
          <div>
            <label>{"Account Name"}</label>
            <div className="input-wrapper">
              <Icons Comp={User} />
              <input
                name={"accountName"}
                onChange={handleInputChange}
                value={formData.accountName}
                disabled
              ></input>
            </div>
          </div>
          <p className="error">{errMsg}</p>
          <div className="submit-btn">
            <button
              type={"Submit"}
              onClick={handleSubmit}
              disabled={!Boolean(formData.accountName)}
            >
              {"Submit Application"}
            </button>
          </div>
        </Form>
      </div>
    </Content>
  );
};

export default Vettedapplication;
