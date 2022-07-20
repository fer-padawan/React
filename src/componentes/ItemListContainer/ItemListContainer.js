import ItemListproduct from "../ItemProduct/ItemListProduct"


const ItemListContainer = ({section}) => {

    const beer1 = {
        titulo: "Cerveza Strong",
        precio: 150,
       // imagen: 'assets/img/Dark strong ale.jpg',
        stock: 10
    }

    const beer2 = {
        titulo: "Cerveza Strong",
        precio: 150,
        //imagen: 'Darkstrongale.jpg',
        stock: 10
    }

    const beer3 = {
        titulo: "Cerveza Strong",
        precio: 150,
       // imagen: 'Darkstrongale.jpg',
        stock: 10
    }

        const handleSubmit = () => {console.log("enviando info")}

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemListproduct data={beer1} action={handleSubmit}/>
            <ItemListproduct data={beer2}/>
            <ItemListproduct date={beer3}/>
            
        </div>
    )
}

export default ItemListContainer