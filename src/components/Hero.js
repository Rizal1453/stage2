import React from "react";
import strip from "../components/assets/images/strips.png";
import food from "../components/assets/images/g10.png";

const Hero = () => {
  return (
    <div className="bg-orens vh-100">
        <div className="d-flex align-items-center justify-content-center py-5">
          <div>
            <h1>
              Are You Hungry ? <br /> Express Home Delivery
            </h1>
            <div className="d-flex">
              <div>
                <img src={strip} alt="" />
              </div>
              <div className="ms-3">
                <p>
                  Lorem Ipsum is simply dummy text of the <br/> printing and
                  typesetting industry. Lorem <br/> Ipsum has been the industry's
                  standard <br/> dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={food} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Hero;
