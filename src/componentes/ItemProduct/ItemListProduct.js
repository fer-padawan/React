/* eslint-disable no-undef */
import React from 'react';
import './ItemListProduct.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';


const ItemListproduct = ({data}) => {

    const {titulo, precio, imagen, stock } = data
   

    return(
        <div className="item-producto">

            <img src= {imagen}  alt="cervezas" / >  
            
            <p>{titulo}</p>
            <span className='precio'>${precio}</span>
            <ItemCount stock= {stock}></ItemCount>
            <Button variant='outlined' endIcon={<ShoppingCartIcon/>}>
            Agregar al carrito
            </Button>

        </div>
        
    )
}



export default ItemListproduct