import React, { useContext } from "react";
import AdressesContext from "../../contexts/adresses";
import "./style.css";

const SearchField = () => {
  function validate(evt) {
    var theEvent = evt || window.event;

    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);

    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  const { setCep } = useContext(AdressesContext);
  return (
    <div style={{ display: "flex" }}>
      <label className="prefix-span " htmlFor="cep">
        CEP
      </label>
      <input
        placeholder="somente números ex: 12345678"
        onKeyPress={(e) => validate(e)}
        maxLength={8}
        onChange={(e) => setCep(+e.target.value)}
        id="cep"
        type="tel"
      />
    </div>
  );
};
export default SearchField;
