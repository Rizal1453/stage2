import React from "react";
import { CardGroup, Card, Container } from "react-bootstrap";
import { drestoran } from "../components/dataDummy/restorans";
import { useNavigate } from "react-router-dom";

const Restoran = () => {
  const navigate = useNavigate();
  const detailRestoran = () => {
    navigate("/menu-bensu");
  };
  return (
    <div className="my-5">
      <Container>
        <div>
          <h2 className="my-5">Restaurant Near You</h2>
        </div>
        <div className="d-flex gap-3 ">
          {drestoran.map((item, index) => (
            <CardGroup>
              <Card className="shadow" onClick={detailRestoran}>
                <Card.Body key={index}>
                  <img src={item.image} alt="" />
                  <Card.Title>{item.nama}</Card.Title>
                  <Card.Text>{item.jarak}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Restoran;
