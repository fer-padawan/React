import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import beer from "../../Utils/productos.mock"
import ItemList from "../ItemList/itemList"


export function ItemListContainer({article}){

    const [listBeer, setlistBeer] = useState([])

    const getProducts = () => new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(beer)
        }, 2000)
    })

    useEffect(() =>{
        const getProducts = async() =>{
            try{
                const responseLog = await getProducts()
                setlistBeer(responseLog)

            }

            catch(error){

                console.log(error)

            }
        }

        getProducts()
    }, [])


    return(
        <div className='list-product'>
            <h2 className='name'>{article}</h2>

            <div className='ItemContainer'>

            <ItemList dataProduct={listBeer}/> 
            
            </div>
        </div>
    )
}
export default ItemListContainer