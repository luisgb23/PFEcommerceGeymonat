import trash from './assets/trash.svg'
import { useCart } from "../../context/CartContext"
const CartItem = ({ id, img, name, quantity, price }) => {
    const subtotal = price * quantity
    const { removeItem } = useCart()
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>Cantidad: {quantity}</td>
                <td>Precio x unidad: {price}</td>
                <td>Subtotal: {subtotal}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => removeItem(id)}>
                        <img src={trash} alt="trash" />
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default CartItem