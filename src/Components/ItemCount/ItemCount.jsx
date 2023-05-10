import { useState } from "react"
import "../Style/ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="Counter">
      <div className="ControlCount">
        <button className="ButtonCount" onClick={increment}>+</button>
        <h4 className="NumberCount">{quantity}</h4>
        <button className="ButtonCount" onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;


