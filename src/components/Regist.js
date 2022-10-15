import Gbuton from "./Button";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Regist = ({ showRegist,setRegist }) => {
  const handleClose = () =>  setRegist(false) ;
  return (
    <div>
      <Modal show={showRegist} onHide={handleClose} login animation={false}>
        <Modal.Body>
          <form>
            <div className="mb-3 ">
              <h2 className="color-orens"> Register</h2>
              <input
                type="email"
                className="form-control p-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="FullName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Gender"
              />
            </div>
            <div class="mb-3">
              <input
                type="name"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Phone"
              />
            </div>
            <Form.Select className="mb-3" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            
            <Gbuton text="Login" size="w-100" />
         
          </form>
        </Modal.Body>

        <div className="d-flex justify-content-center ">
          <p>
            Don't have an account? klik <Link to>HERE</Link>{" "}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Regist;
