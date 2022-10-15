import { useState } from "react";
import Gbuton from "./Button";
import { Modal } from "react-bootstrap";
import { duser } from "./dataDummy/DataUser";

const Login = ({ setShowLogin, showLogin, setIslogin, setUserRole }) => {
  const handleClose = () => setShowLogin(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    role: "user",
  });
  function loginSukses(email, passsword) {
    let statusMessage;
    const emailCheck = duser.find((item) => item.email === email);
    if (emailCheck.length === 0) {
      statusMessage = "Email tidak terdaftar";
      return { status: false, message: statusMessage };
    }
    const filterResult = duser.filter((item) => item.password === passsword);
    if (filterResult.length === 0) {
      statusMessage = "Password salah";
      return { status: false, message: statusMessage };
    }
    statusMessage = "Login Berhasil";
    return { status: true, message: statusMessage, user: filterResult[0] };
  }

  return (
    <div>
      <Modal show={showLogin} login animation={false} onHide={handleClose}>
        <Modal.Body>
          <form>
            <div className="mb-3 ">
              <h2 className="color-orens"> LOGIN </h2>
              <input
                type="email"
                className="form-control p-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={userLogin.email}
                onChange={(e) =>setUserLogin({...userLogin, email: e.target.value})}
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Password"
                value={userLogin.password}
                onChange={(e) =>setUserLogin({...userLogin, password: e.target.value})}
              />
            </div>
            <div className="w-100">
            <Gbuton
              text="Login"
              size="w-100"
              onclick={() => {
                setIslogin(true);
                setShowLogin(false);
                let hasLogin = loginSukses(userLogin.email, userLogin.password);
                setUserRole (hasLogin.user.role)
              }}/>
            </div>
          </form>
        </Modal.Body>

        
        <div className="d-flex justify-content-center ">
          <p>Dont have an account? klik HERE</p>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
