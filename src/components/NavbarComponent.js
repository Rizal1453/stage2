import React, { useContext, useState } from "react";
import user from "./assets/images/user.png";
import burger from "./assets/images/burger.png";
import iconout from "./assets/images/logout.png";
import bucket from "./assets/images/buckets.png";
import vector from "./assets/images/vector.png";

import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Dropdown,
  Badge,
} from "react-bootstrap";
import logo from "../components/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import Gbuton from "./Button";
import Login from "./Login";
import Regist from "./Regist";
import { CartContext } from "./CartContext";


const NavbarComponent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegist, setRegist] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const navigate = useNavigate();
  const [dataCart] = useContext(CartContext);
  // data user
  const [userRole, setUserRole] = useState("");
  
  return (
    <div>
      <Navbar className="bg-orens">
        <Container>
          <NavbarBrand onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </NavbarBrand>

          <Nav>
            {!islogin ? (
              <div>
                <Gbuton
                  text="Register"
                  size="text-white py-2 px-5 rounded-2 me-2"
                  onclick={() => setRegist(true)}
                />
                <Gbuton
                  text="Login"
                  size="text-white py-2 px-5 rounded-2"
                  onclick={() => setShowLogin(true)}
                />
              </div>
            ) : userRole === "admin" ? (
              <div className="">
                <Dropdown>
                  <Dropdown.Toggle variant="yellow" id="dropdown-basic">
                    <img src={vector} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profile-partner")} >
                     
                        <img src={user} alt="" /> Profile Partner
                  
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/add-product")}>
                      <img src={burger} alt="" /> Add Productt
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIslogin(false)}>
                      {" "}
                      <img src={iconout} alt="" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div>
                <Dropdown>
                  <img
                    onClick={() => navigate("/cart-order")}
                    src={bucket}
                    alt=""
                  />
                  <Badge className="bg-danger">
                    {" "}
                    {dataCart.cart}{" "}
                  </Badge>
                  <Dropdown.Toggle variant="yellow" id="dropdown-basic">
                    <img src={vector} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profile-partner")}>
                      <img src={user} alt="" /> Profile Partner
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIslogin(false)}>
                      {" "}
                      <img src={iconout} alt="" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Nav>
        </Container>

        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setIslogin={setIslogin}
          setUserRole={setUserRole}
        />
        <Regist showRegist={showRegist} setRegist={setRegist} />
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
