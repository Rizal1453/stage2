import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Error, Success } from "../../helper/toast";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import NavbarComponent from "../../components/NavbarComponent";

const AddArtis = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)

  const [form, setForm] = React.useState({});
  console.log(form);
  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      await API.post("/createartis", form, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setLoading(true)
      Success({ message: `Success!` });
      navigate("/add-music");
    } catch (error) {
       Error({ message: `Failed!` });
    }
  });

  return (
    <div>
      <NavbarComponent />
      <Container>
        <form onSubmit={(e) => handleSubmit.mutate(e)} className="my-5 ">
          <h2 className="my-3 text-white"> Add Artis </h2>
          <div className="mb-3 d-flex ">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputEmail1"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={handleChanges}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Old"
              name="old"
              onChange={handleChanges}
            />
          </div>
          <Form.Select
            className="mb-3 bg-card "
            style={{ height: "55px" }}
            aria-label="Default select example"
            name="role"
            onChange={handleChanges}
          >
            <option>Solo</option>
            <option value="duet">Duet</option>
            <option value="group">group</option>
            onChange={handleChanges}
          </Form.Select>
          <div class="mb-3">
            <input
              type="text"
              className="form-control p-3 shadow "
              id="exampleInputPassword1"
              placeholder="Start a Career"
              name="startcareer"
              onChange={handleChanges}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className=" bg-orens text-white py-2 w-25 rounded-2"
            >
              {loading? "loading..." : "Add Artis"}
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-end"></div>
      </Container>
    </div>
  );
};

export default AddArtis;
