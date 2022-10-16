import React, { useContext, useState } from "react";
import map from "../components/assets/images/map1.png";
import { Container } from "react-bootstrap";
import cart1 from "../components/assets/images/Cart1.png";
import cart2 from "../components/assets/images/Cart2.png";
import tong from "../components/assets/images/tong.png";
import Gbuton from "../components/Button";
import { CartContext } from "../components/CartContext";

const CartOrder = () => {
  const [dataCart, dispatch] = useContext(CartContext);
  const [counter, setCounter] = useState(dataCart.cart);
  const [keju, setkeju] = useState(dataCart.cart);
  console.log(dataCart);
  console.log(dataCart.bensu);
  console.log(keju);



  const kejucart = () => {
    setkeju(keju + 1);
    
    dispatch({
      type: "UPDATE_DATA",
      payload: keju,
    });
  };

  const addCart = () => {
    setCounter(counter + 1);
    
    dispatch({
      type: "ADD_TO_CART",
      payload: counter,
    });
  };
  return (
    <div>
      <Container>
        <div>
          <h1 className="my-4">Geprek Bensu</h1>
          <h3> Delivery Location </h3>
        </div>
        <div className="d-flex">
          <div class="mb-3 d-flex w-100">
            <input
              type="text"
              className="form-control p-2 shadow"
              id="exampleInputPassword1"
              placeholder="harbour building"
            />
            <button className="bg-brown text-white w-25 ms-3 rounded-2">
              Select On Map <img src={map} alt="" />
            </button>
          </div>
        </div>
        <h2> Review Your Order</h2>
        <div className="pembungkus luar d-flex gap-4">
          <div className="w-75">
            <hr />
            <div className="d-flex">
              <img src={cart1} alt="" />
              <div className="w-100">
                <div className="d-flex justify-content-between my-2 ms-3">
                  <h4> Paket Geprek </h4>
                  <h4 className="text-danger"> Rp.15000 </h4>
                </div>

                <div className="d-flex justify-content-between">
                  <div className=" d-flex ms-3">
                    <span>➖</span> <p className="mx-2">{dataCart.bensu}</p>
                    <span onClick={addCart}>➕</span>
                  </div>
                  <div>
                    <img src={tong} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-list">
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <h6 className="text-danger">Rp.35.000</h6>
            </div>
            <div className="d-flex justify-content-between my-1">
              <h6>QTY</h6>
              <h6>2</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Ongkir</h6>
              <h6 className="text-danger">Rp.10.000</h6>
            </div>
          </div>
        </div>
        <div className="pembungkus luar2 d-flex gap-4">
          <div className="w-75">
            <hr />
            <div className="d-flex">
              <img src={cart2} alt="" />
              <div className="w-100">
                <div className="d-flex justify-content-between ms-3">
                  <h4> Paket Geprek Keju </h4>
                  <h4 className="text-danger"> Rp.20.000 </h4>
                </div>

                <div className="d-flex justify-content-between ms-3">
                  <div className=" d-flex">
                    <span>➖</span> <p className="mx-2">{dataCart.keju}</p>
                    <span onClick={kejucart}>➕</span>
                  </div>
                  <div>
                    <img src={tong} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="w-list">
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Total</h4>
              <h4 className="text-danger">Rp.45.000</h4>
            </div>
          </div>
        </div>
        <Gbuton size="w-25 float-end mt-5" text="order" />
      </Container>
    </div>
  );
};

export default CartOrder;
