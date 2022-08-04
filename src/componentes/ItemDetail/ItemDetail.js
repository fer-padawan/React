import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const ItemDetail = ({product}) => {
    const {titulo, precio, img, stock}= product

    const [quantitySelected, setquantitySelected]= useState(0)
    return(
        <>
            <img src={img} alt=""/>
            <div className ="descripcion">
                <h2>{titulo}</h2>
                <span className="precio">${precio}</span>
                <span className="stock"> Stock Disponible</span>

                {console.log("quantitySelected:",quantitySelected)}

                {
                    quantitySelected>1?<Button><Link to ="/cart">Comprar</Link></Button>:
                    <ItemCount stock={stock} setQuantitySelected= {setquantitySelected}/>
                }

                </div>
                
        </>
    )
}

export default ItemDetail