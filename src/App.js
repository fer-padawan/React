import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Detail from "./page/Detail";
import{BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <BrowserRouter>

    <NavBar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/category/:categoryid" element= {<ItemListContainer/>}/>
    <Route path="/beer/:id" element={<Detail/>}/>
    <Route path="/cart" element={<Cart/>}/>



    </Routes>
  </BrowserRouter>
  );
}

export default App;