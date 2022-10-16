import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../components/assets/images/logo.png";
import user from "./assets/images/user.png";
import burger from "./assets/images/burger.png";
import logout from "./assets/images/logout.png";
import bucket from "./assets/images/buckets.png";
import vector from "./assets/images/vector.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <Navbar className="bg-orens" expand="lg">
      <Container>
        <img src={logo} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav.Link href="#home">
            <img src={bucket} alt="" />
          </Nav.Link>
          <Nav.Link href="#home">
            <img src={vector} alt="" />
          </Nav.Link>
          {/*drop down */}
          <NavDropdown id="basic-nav-dropdown">
            <Link>
              <NavDropdown.Item href="#action/3.1">
                <img src={user} alt="" /> Profile
              </NavDropdown.Item>
            </Link>
            <Link>
              <NavDropdown.Item href="#action/3.2">
                <img src={burger} alt="" /> Add Product
              </NavDropdown.Item>
            </Link>
            <Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <img src={logout} alt="" />
                Log out
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
