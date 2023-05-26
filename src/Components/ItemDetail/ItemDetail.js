import ItemCount from "../ItemCount/ItemCount"
import "../Style/ItemDetail.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)
    const handleOnAdded = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    return (
        <article className="CardItem2">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="Count">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Finalizar compra</Link>
                    ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdded}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
