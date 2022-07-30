
import ItemListproduct from "../ItemProduct/ItemProduct";



const ItemList = ({dataProduct}) =>{

    return(

        <>
            {dataProduct.map(beer => <ItemListproduct key={beer.id} data={beer}/>)}
        </>
    )


}

export default ItemList;