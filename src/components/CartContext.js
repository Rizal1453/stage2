import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: 0,
  bensu: 0,
  keju: 0,
  nama : "",
  email : "",
  phone : 0,

};

const reducer = (_, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        cart: payload,
        bensu: payload,
      };
    case "CLEAR_CART":
      return {
        cart: 0,
      };
      case "UPDATE_DATA":
      return {
        cart : payload,
        keju: payload,
      };
    case "CLEAR_DATA":
      return {
        cart: 0,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = ({ children }) => {
  const [dataCart, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[dataCart, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
