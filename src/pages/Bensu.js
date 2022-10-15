import React, { useContext, useState } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import { CartContext } from "../components/CartContext";
import { dbensu } from "../components/dataDummy/menubensu";


const Bensu = () => {
  const [dataCart, dispatch] = useContext(CartContext);
  const [counter, setCounter] = useState(dataCart.cart);
  console.log(dataCart);

  const addCart = () => {
    setCounter(counter + 1);
    dispatch({
      type: "ADD_TO_CART",
      payload: counter,
    });
  };

  return (
    <div className="mt-5">
      <Container>
        <div>
          <h2>Geprek Bensu</h2>
        </div>
        {/* Card */}

        <div className="row">
          {dbensu.map((item) => (
            <div className="col-lg-3 col-12 mb-lg-3 mb-3">
              <CardGroup className="h-100">
                <Card className="shadow">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <img src={item.image} alt="" />
                    <Card.Title>{item.nama}</Card.Title>
                    <Card.Text className="text-danger">
                      Rp. {item.harga}
                    </Card.Text>
                    <button
                      className="w-100 border-0 py-1 rounded-2 bg-orens"
                      onClick={addCart}
                    >
                      order
                    </button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Bensu;
