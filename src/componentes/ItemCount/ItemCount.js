import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';




const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(0)


    const addNumber = () => {
        if (stock > contador){
        setContador (contador+1)
    }
}

    const restNumber = () => {

        if(contador>0){
        setContador (contador - 1)
    }

}
return(
    <div className="masBoton">
        <IconButton onClick={restNumber} size="small"> <RemoveIcon /> </IconButton>
        <span className="cantidad"> {stock}</span>
        <IconButton onClick={addNumber} size="small"> <AddIcon /> </IconButton> 
    </div>

)
}

export default ItemCount;