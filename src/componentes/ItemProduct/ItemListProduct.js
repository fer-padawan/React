import { useState } from "react";



const ItemListproduct = ({data, action}) => {

    const [contador, setContador] = useState(1)

    const{titulo, precio, } = data

    const addNumber = () => {
        setContador(contador+1)
    }

    const restNumber = () => {
        setContador (contador - 1)
    }

    return(
        <div className="item-producto">
            
            <p>{titulo}</p>
            <span>${precio}</span>
            <div className="masProducto">
                <button onClick={restNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={action}>Agregar al carrito</button>
        </div>
    )
}

export default ItemListproduct