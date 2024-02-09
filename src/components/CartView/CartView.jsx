import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, totalQuantity, total} = useCart()
    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className="text-center mt-4">No hay items en el carrito</h1>
                <div className="row">
                    <div className="text-center">
                        <Link to='/' className="btn btn-danger">Productos</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                {cart.map(p => <CartItem key={p.id}{...p} />)}
            </table>
            <h4>Total: $ {total}</h4>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to='/checkout' className="btn btn-danger me-md-2">Checkout</Link>
                <button onClick={() => clearCart()} className="btn btn-secondary">Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart