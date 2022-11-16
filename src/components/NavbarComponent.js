import React, { useContext, useState } from "react";
import music from "./assets/images/music.png";
import artis from "./assets/images/artis.png";
import iconout from "./assets/images/logoutdrop.png";
import walet from "./assets/images/bill.png";
import vector from "./assets/images/vector.png";

import { Navbar, Nav, Container, NavbarBrand, Dropdown } from "react-bootstrap";
import logo from "../components/assets/images/logosound.png";
import { useNavigate } from "react-router-dom";
import Gbuton from "./Button";
import Login from "./Login";
import Regist from "./Regist";

import { LoginContext } from "./LoginContext";

const NavbarComponent = () => {
  const [state, dispatch] = useContext(LoginContext);
  const loginsukses = state.isLogin;

  console.log(loginsukses);


  const [showLogin, setShowLogin] = useState(false);
  const [showRegist, setRegist] = useState(false);

  const navigate = useNavigate();

  // data user

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <div className="position static transparent bg-opacity">
      <Navbar>
        <Container>
          <NavbarBrand onClick={() => navigate("/income")}>
            <img src={logo} alt="" />
          </NavbarBrand>

          <Nav>
            {state.user.role === "user" ? (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="yellow" id="dropdown-basic">
                    <img src={vector} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-card">
                    <Dropdown.Item onClick={() => navigate("/pay")}>
                      <img src={walet} alt="" /> Pay
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>
                      {" "}
                      <img src={iconout} alt="" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : state.user.role === "admin" ? (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="yellow" id="dropdown-basic">
                    <img src={vector} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-card">
                    <Dropdown.Item onClick={() => navigate("/add-music")}>
                      <img src={music} alt="" /> Add Music
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/add-artis")}>
                      <img src={artis} alt="" /> Add Artis
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>
                      {" "}
                      <img src={iconout} alt="" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div>
                <Gbuton
                  text="Register"
                  size="text-white py-2 px-5 rounded-2 me-2"
                  onClick={() => setRegist(true)}
                />
                <Gbuton
                  text="Login"
                  size="text-white py-2 px-5 rounded-2"
                  onClick={() => setShowLogin(true)}
                />
              </div>
            )}
          </Nav>
        </Container>

        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setRegist={setRegist}
        />
        <Regist
          showRegist={showRegist}
          setRegist={setRegist}
          setshowLogin={setShowLogin}
        />
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
