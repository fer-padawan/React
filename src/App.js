import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
  <div className="container" >
  <NavBar />

    <div className="main">

  <ItemListContainer section= "Cervezas"/>
  <ItemListContainer section= "De Temporada"/>
  <ItemListContainer section= "Mas Solicitados"/>
    
     </div>
     
  </div>

  );
}

export default App;
