import ItemCount from "../ItemCount/ItemCount"
import "../Style/ItemDetail.css"
const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Se compraron ${quantity} unidades`)}/>
            </footer>
        </article>
    )
}

export default ItemDetail
