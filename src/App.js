import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
  <>
  <NavBar />

  <div className="main">

  <ItemListContainer section= "Nuestros productos"/>
    
  </div>
  </>

  );
}

export default App;
