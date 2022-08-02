import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";


function App() {
  return (
  <div className="container" >
  <NavBar />

    <div className="main">

  <ItemListContainer article= "Cervezas"/>
  <ItemListContainer article= "De Temporada"/>
 
  <ItemDetail/>

    
     </div>
     
  </div>

  );
}

export default App;