import { createContext, useReducer } from "react";

export const ProfileContext = createContext();

const initialState = {
  nama: "",
  email: "",
  phone: 0,
  cart: null,
};

const reducer = (_, action) => {
  const { type, payload,emailload ,phoneload} = action;

  switch (type) {
    case "UPDATE_DATA":
      return {
        nama: payload,
        email: emailload,
        phone: phoneload,
        
      };
    case "CLEAR_CART":
      return {
        cart: payload,
      };
    default:
      throw new Error();
  }
};

export const ProfileContextProvider = ({ children }) => {
  const [dataPartner, dispatch] = useReducer(reducer, initialState);

  return (
    <ProfileContext.Provider value={[dataPartner, dispatch]}>
      {children}
    </ProfileContext.Provider>
  );
};
