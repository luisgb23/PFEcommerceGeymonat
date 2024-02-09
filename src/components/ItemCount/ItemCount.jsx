import { useState } from "react"
import style from './ItemCount.module.css'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
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
        <div className={style.wrapper}>
            <div className={style.controls}>
                <button className="btn btn-danger btnControl" onClick={decrement}> - </button>
                <h4 className={style.number}>{quantity}</h4>
                <button className="btn btn-danger btnControl" onClick={increment}> + </button>
            </div>
            <div>
                <button className="btn btn-danger" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>

    )
}

export default ItemCount