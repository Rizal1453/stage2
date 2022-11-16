import React from "react";
import { Button } from "react-bootstrap";

const GlobalButton = ({ text, size, ...oke }) => {
  return (
    <Button {...oke} className={` bg-orens border-0 ${size} `}>
      {text}
    </Button>
  );
};

export default GlobalButton;
