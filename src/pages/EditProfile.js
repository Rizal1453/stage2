import React from "react";
import { Container } from "react-bootstrap";
import map from "../components/assets/images/map1.png";
import attach from "../components/assets/images/attach.png";
import Gbuton from "../components/Button";

const EditProfile = () => {
  return (
    <div>
      <Container>
        <form className="my-5">
          <h2 className="my-3"> Edit My Profile </h2>
          <div className="mb-3 d-flex ">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Full Name"
            />
            <div class=" ms-2 w-25 d-flex rounded-3 bg-light">
              <label
                htmlFor="upload"
                className="border shadow p-0 w-100 h-100 rounded-3 d-flex align-items-center bg-light "
              >
                <p className="d-flex justify-content-between w-100 mt-3 ms-2 fs-6">
                  Attach Image <img className="me-2" src={attach} alt="" />
                </p>
              </label>
              <input type="file" id="upload" name="inputImage" hidden />
            </div>
          </div>
          <div class="mb-3">
            <input
              type="email"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Phone"
            />
          </div>
          <div class="mb-3 d-flex">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Location"
            />
            <button className="w-25 bg-brown rounded 2 text-white ms-2">
              Select On Map <img src={map} alt="" />{" "}
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <Gbuton text="save" size="text-white py-2 w-25 rounded-2" />
        </div>
      </Container>
    </div>
  );
};

export default EditProfile;
