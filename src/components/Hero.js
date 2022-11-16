import React from "react";
import strip from "../components/assets/images/strips.png";
import food from "../components/assets/images/g10.png";
import { Container } from "react-bootstrap";
import Banner from "../components/assets/images/landingBackground.png";

const Hero = () => {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center ">
      <Container className="text-white d-flex flex-column align-items-center mt-50">
        <h1>Connect on DumbSound</h1>
        <p>Discovery, Stream, and share a constantly expanding mix of music</p>
        <p> from emerging and major artists around the world</p>
      </Container>
    </div>
  );
};

export default Hero;
