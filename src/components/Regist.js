import Gbuton from "./Button";
import { Modal, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { Error, Success } from "../helper/toast";
const Regist = ({ showRegist, setRegist, showLogin, setShowLogin }) => {
  const handleClose = () => setRegist(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const response = await API.post("/register", form);
      setRegist(false);
      Success({ message: `register Success!` });
    } catch (error) {
       Error({ message: `register Failed!` });
    }
  });

  return (
    <div>
      <Modal show={showRegist} onHide={handleClose} login animation={false}>
        <Modal.Body className="bg-dark">
          <div className="mb-3 ">
            <h2 className="text-white"> Register </h2>
            <input
              type="email"
              className="form-control p-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control p-2"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputPassword1"
              placeholder="Full Name"
              name="fullname"
              onChange={handleChange}
            />
          </div>
          <Form.Select
            className="mb-3 bg-card"
            aria-label="Default select example"
            name="gender"
            onChange={handleChange}
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            onChange={handleChange}
          </Form.Select>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputPassword1"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputPassword1"
              placeholder="Address"
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="w-100">
            <Gbuton
              text="register"
              size="w-100"
              onClick={(e) => handleSubmit.mutate(e)}
            />
          </div>
        </Modal.Body>
        <div className="d-flex justify-content-center bg-dark text-white ">
          <p>
            Already have an account ?klik{" "}
            <span
              className="me-1"
              onClick={() => {
                setShowLogin(true);
                setRegist(false);
              }}
            >
              HERE
            </span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Regist;
