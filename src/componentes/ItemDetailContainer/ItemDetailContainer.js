import beer from "../../Utils/productos.mock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react'

const ItemDetailContainer = () =>{

    const [Beer, setBeer] = useState([])
    const [isBeer, setIsbeer] = useState(true)
    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(beer)
        },2000)
    })
    useEffect(()=>{
        getItem
        .then((res)=>{
            setBeer(res)
            setIsbeer(false)
        })
    },[])

    if (isBeer){
        return <div> Sirviendo ...</div>
    }

    return(
        <>
            <ItemDetail data={Beer[0]} />
        </>
    )
}

export default ItemDetailContainer