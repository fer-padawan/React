
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import beer from "../../Utils/productos.mock"
import Item from "../Item/item"

const ItemListContainer = ({articulos}) => {

    const[article, setArticles] = useState([])

    const getBeer = () =>new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(beer)
        },2000)
    })
      
    useEffect(()=>{
        const getBeer = async() =>{
            try{

                const responseLog = await getBeer()
               
                setArticles(responseLog)

            }
            catch(error){

                console.log(error)

            }
        }
    })
    return(
        <div className='list-products'>
            <h2 className="name">{articulos}</h2>
            <div className="ContainerItem">
                <Item dataProduct={article}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer