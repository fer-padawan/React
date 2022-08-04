import beer from "../../Utils/productos.mock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{

    const [Beer, setBeer] = useState([])
    const {id} =useParams()
    const filterId = beer.filter((beer) => beer.id ===Number(id))
    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(filterId[0])
        },2000)
    })

    useEffect(()=>{
        const ItemAwait = async() =>{
        try{
            const responseLog = await getItem()
            setBeer(responseLog)
        }
        catch(error){
            console.log(error)
        }
    }
        
        ItemAwait()
    },[])

    

    return(
    
        <div className="item-detail-container" >
        <ItemDetail product={Beer} />
        </div>
        
    )
}

export default ItemDetailContainer