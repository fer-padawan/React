import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "react-bootstrap";
import ShoppingCart from "@mui/icons-material/ShoppingCart";




const ItemCount = ({stock, setQuantitySelected}) => {

    let initialStock = stock
    const [contador, setContador] = useState(1)


    const addNumber = (i) => {
        if (initialStock){
        setContador (contador+i)
    }
}

const onAdd = () =>{
    setQuantitySelected(contador)
}

/*    const restNumber = () => {

        if(contador>0){
        setContador (contador - 1)
    }

}*/
return(
    <div className="masBoton">
        <IconButton onClick={()=>addNumber(-1)} size="small" disabled={contador ===1}> <RemoveIcon /> </IconButton>
        <span className="cantidad"> {contador}</span>
        <IconButton onClick={()=>addNumber(1)} size="small" disabled={contador === initialStock}>
         <AddIcon /> 
         </IconButton> 
        <Button onClick={onAdd}variant="outlined" endIcon={<ShoppingCart/>}>
            Agregar al carrito
        </Button>
    </div>

)
}

export default ItemCount;