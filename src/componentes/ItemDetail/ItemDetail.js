
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ItemDetail = ({product}) => {
    const {titulo, precio, img, stock}= product
    return(
        <>
            <img src={img} alt=""/>
            <div className ="descripcion">
                <h2>{titulo}</h2>
                <span className="precio">${precio}</span>
                <span className="stock"> Stock Disponible</span>
                <ItemCount stock={stock}/>
                <Button variant="outlined" endIcon={<ShoppingCartIcon/>}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}

export default ItemDetail