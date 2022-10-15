import React from "react";
import { dcategory } from "./dataDummy/categories";
import { Container } from "react-bootstrap";

const Category = () => {
  return (
    <div className="my-5">
      <Container>
        <div className="my-5">
          <h2>Popular Restaurant</h2>
        </div>
        <div className=" d-md-flex flex-md-row flex-md-wrap gap-3 justify-content-md-center ">
          {dcategory.map((item) => (
            <div className="d-flex align-items-center w-category border shadow rounded-3 bcategory bg-light">
              <img className="ms-3" src={item.image} alt="" />
              <h6 className="ms-3">{item.nama}</h6>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;
