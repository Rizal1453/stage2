import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import attach from "../../components/assets/images/attachred.png";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { Error, Success } from "../../helper/toast";
import NavbarComponent from "../../components/NavbarComponent";

const AddMusic = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = React.useState(null);
  const [artis, setArtis] = useState();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = React.useState();
  console.log(form);
  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    console.log(form);

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  const getArtis = async () => {
    try {
      const response = await API.get("/fartis");
      setArtis(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("year", form.year);
      formData.set("artis_id", form.artis_id);
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("song", form.song[0], form.song[0].name);
      console.log(form);

      await API.post("/createsong", formData);
      setLoading(true);

      navigate("/");
      Success({ message: `succes` });
    } catch (error) {
       Error({ message: `failed!` });
    }
  });

  useEffect(() => {
    getArtis();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container>
        <form onSubmit={(e) => handleSubmit.mutate(e)} className="my-5 ">
          <h2 className="my-3 text-white"> Add Music </h2>
          <div className="mb-3 d-flex ">
            <input
              type="text"
              className="form-control p-3 shadow"
              id="exampleInputEmail1"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Title"
              onChange={handleChanges}
            />
            <div class=" bg-card ms-2 w-25 d-flex rounded-3">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChanges}
                hidden
              />
              <label
                htmlFor="image"
                className="border shadow p-0 w-100 h-100 rounded-3 d-flex align-items-center bg-card text-white "
              >
                <p className="d-flex justify-content-between w-100 mt-3 ms-2 fs-6">
                  Attach Thumbnail <img className="me-2" src={attach} alt="" />
                </p>
              </label>
            </div>
          </div>
          <div class="mb-3">
            <input
              type="number"
              className="form-control p-3 shadow"
              id="exampleInputPassword1"
              placeholder="Years"
              name="year"
              onChange={handleChanges}
            />
          </div>
          <Form.Select
            className="mb-3 bg-card "
            style={{ height: "55px" }}
            aria-label="Default select example"
            name="artis_id"
            onChange={handleChanges}
          >
            <option>pilih artis</option>
            {artis?.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </Form.Select>
          <div class=" bg-card w-25 d-flex rounded-3">
            <label
              htmlFor="song"
              className="border shadow p-0 w-100 h-100 rounded-3 d-flex align-items-center bg-card text-white "
            >
              <p className="d-flex justify-content-center w-100 mt-3 ms-2 fs-6">
                Attach
              </p>
            </label>
            <input
              type="file"
              id="song"
              name="song"
              onChange={handleChanges}
              hidden
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className=" bg-orens text-white py-2 w-25 rounded-2"
            >
              {loading?"loading...":"Add Song"}
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-end"></div>
      </Container>
    </div>
  );
};

export default AddMusic;
