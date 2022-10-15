import React from "react";
import { Container } from "react-bootstrap";
import attach from "../../components/assets/images/attach.png";

const AddProduct = () => {
  return (
    <div>
      <Container>
        <form className="my-5">
          <h2 className="my-3"> Add Product </h2>
          <div className="mb-3 d-flex ">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
            <div class=" bg-white ms-2 w-25 d-flex rounded-3">
              <label
                htmlFor="upload"
                className="border shadow p-0 w-100 h-100 rounded-3 d-flex align-items-center bg-light "
              >
                <p className="d-flex justify-content-between w-100 mt-3 ms-2 fs-6">
                  Attach Image <img className="me-2" src={attach} alt="" />
                </p>
              </label>
              <input type="file" id="upload" name="inputImage" hidden />
            </div>
          </div>
          <div class="mb-3">
            <input
              type="number"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Price"
            />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button className="bg-brown text-white py-2 w-25 rounded-2">
            {" "}
            save
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AddProduct;
