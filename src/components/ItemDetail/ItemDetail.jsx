import { useState } from "react"
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../../context/CartContext'
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()

    const {showNotification} = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('success', `Se agregaron correctamente ${quantity} ${name}`)
        setQuantity(quantity)
    }
    return (
        <article className="card cardDetail">
            <header className="card-header mb-2 bgColor">
                <h2 className="text-center">{name}</h2>
            </header>
            <picture className="text-center">
                <img src={img} alt={name} className="imgCard" />
            </picture>
            <section className="card-body">
                <p className='text-center'>Categoría: {category}</p>
                <p className='text-center'>Precio: {price}</p>
                <p className='text-center'>Descripción: {description}</p>
                <p className='text-center'>Stock: {stock}</p>
            </section>
            <footer className='text-center mb-2'>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart' className="btn btn-danger">Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail