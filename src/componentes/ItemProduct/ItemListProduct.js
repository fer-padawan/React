/* eslint-disable no-undef */
import { useState } from "react";
import './ItemListProduct.css';


const ItemListproduct = ({data, action}) => {

    const [contador, setContador] = useState(0)


    const addNumber = () => {
        if (data.stock > contador){
        setContador (contador+1)
    }
}

    const restNumber = () => {

        if(contador>0){
        setContador (contador - 1)
    }

}

    return(
        <div className="item-producto">

            <img src= {data?.imagen}  alt="cervezas" / >  
            
            <p>{data?.titulo}</p>
            <span>${data?.precio}</span>
            <div className="masProducto">
                <button onClick={restNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <span>{data?.stock}</span>
            <button onClick={action}>Agregar al carrito</button>
        </div>
        
    )
}



export default ItemListproduct