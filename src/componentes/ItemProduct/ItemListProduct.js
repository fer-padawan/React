import { useState } from "react";



const ItemListproduct = ({data, action}) => {

    const [contador, setContador] = useState(1)


    const addNumber = () => {
        setContador(contador+1)
    }

    const restNumber = () => {
        setContador (contador - 1)
    }

    return(
        <div className="item-producto">

            <img src="https://res.cloudinary.com/dqfply6ry/image/upload/v1658366773/Dark_strong_ale_rebvow.jpg" />
            
            <p>{data?.titulo}</p>
            <span>${data?.precio}</span>
            <div className="masProducto">
                <button onClick={restNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <span>${data?.stock}</span>
            <button onClick={action}>Agregar al carrito</button>
        </div>
        
    )
}



export default ItemListproduct