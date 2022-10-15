import Hero from "../components/Hero";
import Category from "../components/Category";
import Restoran from "./Restoran";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

function Landing() {
 

  

  return (
    <div>
      <Hero />
      <Category />
      <Restoran />
    </div>
  );
}
export default Landing;
