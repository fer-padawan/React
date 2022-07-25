import ItemListproduct from "../ItemProduct/ItemListProduct"
import './ItemListContainer.css'

const ItemListContainer = ({section}) => {

    const beer1 = {
        titulo: "Cerveza Strong",
        precio: 150,
        imagen: 'https://res.cloudinary.com/dqfply6ry/image/upload/v1658366773/Dark_strong_ale_rebvow.jpg',
        stock: 10
    }

    const beer2 = {
        titulo: "Cerveza Strong",
        precio: 150,
        imagen: 'https://res.cloudinary.com/dqfply6ry/image/upload/v1658369320/png-clipart-beer-stein-pint-glass-beer-glasses-oktoberfest-celebrations-glass-beer_xoetkg.png',
        stock: 10
    }

    const beer3 = {
        titulo: "Cerveza Strong",
        precio: 150,
        imagen: 'https://res.cloudinary.com/dqfply6ry/image/upload/v1658365305/cld-sample-2.jpg',
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