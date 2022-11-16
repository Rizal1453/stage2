import { useState, useContext } from "react";
import Gbuton from "./Button";
import { Modal } from "react-bootstrap";
import { duser } from "./dataDummy/DataUser";
import { API } from "../config/api";
import { LoginContext } from "./LoginContext";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Error, Success } from "../helper/toast";

const Login = ({
  setShowLogin,
  showLogin,
  setIslogin,
  setUserRole,
  showRegist,
  setRegist,
}) => {
  const [state, dispatch] = useContext(LoginContext);
  const handleClose = () => setShowLogin(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChanges = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  // console.log(userLogin);
  const handleSubmit = useMutation(async (e) => {
    try {
      const response = await API.post("/login", userLogin);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });
      localStorage.setItem("token", response.data.data.token);
      console.log(response);
      Success({ message: `Login Success!` });
      handleClose();

      state.user.role == "admin" ? navigate("/income") : navigate("/");
    } catch (error) {
      Error({ message: `Login Failed!` });
    }
  });
  console.log(state);
  console.log(state.user.role, "admin apa user");
  const [statusMessage, setStatusMessage] = useState("");

  function loginSukses(email, passsword) {
    const emailCheck = duser.filter((item) => item.email === email);
    console.log(emailCheck);
    if (emailCheck.length === 0) {
      // statusMessage = "Email tidak terdafta";
      setStatusMessage("Email tidak terdaftar");
      return { status: false, message: statusMessage };
    }
    const filterResult = emailCheck.filter(
      (item) => item.password === passsword
    );
    if (filterResult.length === 0) {
      setStatusMessage("Password salah");
      return { status: false, message: statusMessage };
    }
    setStatusMessage("Login Sukses");
    console.log(filterResult);
    return { status: true, message: statusMessage, user: filterResult[0] };
  }

  return (
    <div>
      <Modal show={showLogin} login animation={false} onHide={handleClose}>
        <Modal.Body className="bg-dark">
          {statusMessage !== "" && <p>{!statusMessage}</p>}

          <div className="mb-3 ">
            <h2 className="text-white"> LOGIN </h2>
            <input
              type="email"
              className="form-control p-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              value={userLogin.email}
              onChange={handleChanges}
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              className="form-control p-3"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={userLogin.password}
              onChange={handleChanges}
            />
          </div>
          <div className="w-100">
            <Gbuton
              size="w-100"
              text="login"
              onClick={(e) => {
                handleSubmit.mutate(e);
                let hasLogin = loginSukses(userLogin.email, userLogin.password);
                console.log(hasLogin);
                hasLogin.status && setIslogin(true);
                hasLogin.status && setUserRole(hasLogin.user.role);
                console.log(setUserRole);
                hasLogin.status && setShowLogin(false);
              }}
            >
              login
            </Gbuton>
          </div>
        </Modal.Body>

        <div className=" bg-dark d-flex justify-content-center ">
          <p>
            Don't have an account? klik{" "}
            <span
              onClick={() => {
                setRegist(true);
                setShowLogin(false);
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

export default Login;
