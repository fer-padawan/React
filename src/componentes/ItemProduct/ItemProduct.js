/* eslint-disable no-undef */
import React from 'react';
import './ItemListProduct.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



const ItemListproduct = ({data}) => {

    const { id, titulo, precio, imagen, stock } = data
   

    return(
        <Link style = {{textDecoration: "none", color: "black"}} to={`/beer/${id}`}>
        <div className="item-producto">

            <img src= {imagen}  alt="cervezas" / >  
            
            <p>{titulo}</p>
            <span className='precio'>${precio}</span>
            <ItemCount stock= {stock}></ItemCount>
            

        </div>
        </Link>
        
    )
}



export default ItemListproduct