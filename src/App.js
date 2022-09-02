import { useState } from "react";
import "./App.css";
import {
  Aside,
  Header,
  Main,
  Nav,
  NavItem,
  NavList,
  Profile,
} from "./App.Styled";
import logo from "./assets/logo.png";
import { Icons } from "./components/Icons/Icons";
import Home from "./pages/home/Home";
import Vettedapplication from "./pages/application/index.js";
import Success from "./pages/success";
import { currentLabel, pages, profileData } from "./pages/mockData";
import { ReactComponent as Fist } from "./assets/hand_fist.svg";
import { ReactComponent as HandOne } from "./assets/hipster.svg";
import { ReactComponent as HandThree } from "./assets/HandThree.svg";
import { ReactComponent as Notification } from "./assets/notification.svg";

import { ReactComponent as Back } from "./assets/back.svg";
function App() {
  const [currentPage, setCurrentPage] = useState("myProfile");
  const [application, setApplication] = useState();
  const handleClick = (e) => {
    const { value } = e.target;
    setApplication(value);
  };

  const getDashboard = (application) => {
    if (application === "applied") {
      return <Vettedapplication setApplicaation={setApplication} />;
    } else if (application === "success") {
      return <Success setApplicaation={setApplication} />;
    } else return <Home />;
  };
  return (
    <div className="App">
      <Aside className={"side-bar"}>
        <img src={logo} alt={"fitted"} />
        <Profile>
          <div
            className="avatar"
            style={{ margin: "auto", width: "74px", height: "74px" }}
          >
            <div className="avatar__letters">{"SA"}</div>
          </div>
          <p className="profile__name">{profileData.name}</p>
          <p style={{ fontSize: "14px" }}>{profileData.email}</p>
          <p style={{ fontSize: "12px" }}>{profileData.desc}</p>
          <select
            className="select__dashboard"
            name={"vetTailor"}
            onClick={handleClick}
          >
            <option>{"Non-Vetted Tailor"}</option>
            <option value={"applied"}>{"Apply to be a vetted tailor"}</option>
          </select>
        </Profile>
        <Nav>
          <NavList>
            {pages.map(({ name, label, icon }) => (
              <NavItem
                key={name}
                active={name === currentPage}
                onClick={() => setCurrentPage(name)}
              >
                <div className="item">
                  <Icons Comp={icon} />
                  <span>{label}</span>
                </div>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        <Fist className={"fist"} />
      </Aside>
      <Main>
        <Header>
          <div className={"header-container"}>
            <div className={"header-label"}>
              <button>
                <Icons Comp={Back} />
              </button>
              <h4>{currentLabel[application]}</h4>
            </div>
            <div className="header-profile">
              <Icons Comp={Notification} />
              <div className="avatar">
                <div className="avatar__letters">{"SO"}</div>
              </div>
            </div>
          </div>
        </Header>

        <HandOne className={"handOne"} />
        <div className="main__content_body">{getDashboard(application)}</div>

        <HandThree className={"handThree"} />
      </Main>
    </div>
  );
}

export default App;
