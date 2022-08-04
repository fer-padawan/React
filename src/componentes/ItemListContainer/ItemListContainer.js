import React from "react";

import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import beer from "../../Utils/productos.mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';



export function ItemListContainer({ article }) {

  const [listBeer, setlistBeer] = useState([]);
  const{categotyid} = useParams()
  const filterByCategory = beer.filter((beer) => beer.category === categotyid)


  const getProducts = () =>

    new Promise((resolve, reject) => {

      setTimeout(() => {

        if(categotyid === "Cervezas" || categotyid === "De temporada"){

        resolve(filterByCategory);
      }

      else{
        resolve (beer)
      }

      }, 2000)

    })
    

  useEffect(() => {

    const getProductos = async () => {

      try {

        const responseLog = await getProducts();

        setlistBeer(responseLog);

      } catch (error) {

        console.log(error);

      }

    };

    getProductos();

  }, []);

  return (

    <div className="list-product">

      <h2 className="name">{article}</h2>

      <div className="ItemContainer">

        <ItemList dataProduct={listBeer} />

      </div>

    </div>

  );

}

export default ItemListContainer;