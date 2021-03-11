import React, { useContext } from "react";
import AdressesContext from "../../contexts/adresses";
import "./style.css";

const Button = () => {
  const { postAddress, cep } = useContext(AdressesContext);
  return <button onClick={() => postAddress(cep)}>Buscar</button>;
};
export default Button;
