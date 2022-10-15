import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { useState } from "react";

import NavbarComponent from "./components/NavbarComponent";
import Bensu from "./pages/Bensu";
import MyProfile from "./pages/MyProfile";
import Profilepartner from "./pages/admin/Profilepartner";
import AddProduct from "./pages/admin/AddProduct";
import EditProfilePartner from "./pages/admin/EditProfilePartner";
import EditProfile from "./pages/EditProfile";
import CartOrder from "./pages/CartOrder";
import { LoginContext } from "./components/LoginContext";
import { CartContextProvider } from "./components/CartContext";
import { ProfileContext } from "./components/ProfileContext";
import Income from "./pages/admin/Income";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
    <LoginContext.Provider value={{ login, setLogin }}>
    <ProfileContext.Provider>
          <CartContextProvider>
            <Router>
              <NavbarComponent />
              <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/menu-bensu" element={<Bensu />} />
                <Route exact path="/myprofile" element={<MyProfile />} />
                <Route
                  exact
                  path="/profile-partner"
                  element={<Profilepartner />}
                />
                <Route exact path="/add-product" element={<AddProduct />} />
                <Route
                  exact
                  path="/edit-profile-partner"
                  element={<EditProfilePartner />}
                />
                <Route exact path="/edit-profile" element={<EditProfile />} />
                <Route exact path="/cart-order" element={<CartOrder />} />
                <Route exact path="/income" element={<Income />} />
              </Routes>
            </Router>
          </CartContextProvider>
          </ProfileContext.Provider>
        </LoginContext.Provider>
    </div>
  );
}

export default App;
