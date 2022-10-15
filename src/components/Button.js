import React from "react";
import { Button } from "react-bootstrap";

const GlobalButton = ({ text, size,onclick }) => {
  return <Button onClick={onclick} className={`bg-brown border-0 ${size} `}>{text}</Button>;
};

export default GlobalButton;
  