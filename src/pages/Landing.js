import Hero from "../components/Hero";
import Playlist from "../components/Playlist";

import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import NavbarComponent from "../components/NavbarComponent";

function Landing() {
  return (
    <div className="myBG">
      <NavbarComponent />
      <Hero />
      <Playlist />
    </div>
  );
}
export default Landing;
