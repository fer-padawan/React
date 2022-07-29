
import ItemListproduct from "../ItemProduct/ItemListProduct";



const Item = ({dataProduct}) =>{

    return(

        <>
            {dataProduct.map(beer => <ItemListproduct key={beer.id} data={beer}/>)}
        </>
    )


}

export default Item;