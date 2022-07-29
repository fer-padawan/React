import { useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import beer from "../../Utils/productos.mock";
import ItemListContainer from "../ItemListContainer/itemListContainer";

export function ItemListContainer({article}) {

    
    
    const [list, setlist] = useState([])
    
    const getBeer = () => new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(beer)
        }, 2000 )
    })
    
    useEffect (() => {
        const getBeer= async () =>{
        try{
            const responseLog = await getBeer()
            setlist(responseLog)
        }
        
        catch(error){
            console.log(error)
        }
    }
    
    getBeer()
    
},[])

return(
    <div className="item-List">

            <h2 className="name">{article}</h2>
            <div className="containerItem">
                <Item dataProduct={list}/>
            </div>
            
            
        </div>
)

}

export default ItemList;