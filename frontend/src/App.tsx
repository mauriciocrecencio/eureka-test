import React from "react";
import { AdressesProvider } from "./contexts/adresses";
import Home from "./pages/Home";

function App() {
  return (
    <AdressesProvider>
      <Home />
    </AdressesProvider>
  );
}

export default App;
