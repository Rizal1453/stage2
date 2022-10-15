import React from "react";
import { Container } from "react-bootstrap";
import cart1 from "../../components/assets/images/partner.png";
import logo from "../../components/assets/images/logo.png";
import Gbuton from "../../components/Button";
import { useNavigate } from "react-router-dom";
const Profilepartner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <Container className="d-flex">
        <div className=" w-25 d-flex">
          <div className="w-100  ">
            <h2>Profile Partner</h2>
            <img src={cart1} alt="" />
            <div>
              <Gbuton
                text="Edit Profile"
                size="mt-3 w-100 text-white py-2 rounded-2" onclick={() => navigate("/edit-profile-partner")}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="ms-3  mt-5">
            <h3 className="text-brown">Name Partner</h3>
            <p>
              <strong>Geprek Bensu</strong>{" "}
            </p>
            <h3 className="text-brown mt-2"> Email</h3>
            <p>
              {" "}
              <strong>bensu@gmail.com</strong>{" "}
            </p>
            <h3 className="text-brown mt-2">phone</h3>
            <p>
              <strong>08968098888</strong>
            </p>
          </div>

          <div>
            <h1>Histori Transaction</h1>
            <div className="bg-light d-flex justify-content-between px-2 shadow rounded-2 w-list ">
              <div>
                <h5>Andi</h5>
                <p>saturday 12 march</p>
                <p>Total : Rp.45000</p>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <img src={logo} alt="" />
                <button className="btn btn-outline-success "> Finished</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profilepartner;
