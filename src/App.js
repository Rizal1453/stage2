import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";

import { useContext, useEffect, useState } from "react";

import { API, setAuthToken } from "./config/api";
import AddMusic from "./pages/admin/AddMusic";

import Income from "./pages/admin/Income";
import { LoginContext } from "./components/LoginContext";
import Pay from "./pages/Pay";
import AddArtis from "./pages/admin/AddArtis";
import Player from "./components/PlayMusic";
import Appplay from "./components/Appplay";
import "./components/player.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// const PrivateRoutes = () => {
//   const [state,dispatch] = useContext(LoginContext);

//   return state.isLogin ? <Outlet /> : <Navigate to="/" />;
// };

function App() {
  // const navigate = useNavigate();

  const [state, dispatch] = useContext(LoginContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log(response);

      let payload = response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          {/* <Route path="/" element={<PrivateRoutes />}> */}

          <Route exact path="/pay" element={<Pay />} />

          <Route exact path="/add-music" element={<AddMusic />} />
          <Route exact path="/add-artis" element={<AddArtis />} />

          <Route exact path="/income" element={<Income />} />
          {/*   </Route> */}
          <Route exact path="/play" element={<Appplay />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
