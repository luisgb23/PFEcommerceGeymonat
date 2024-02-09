import cart from './assets/cart.svg'
import style from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'
import {Link} from 'react-router-dom'
const CartWidget = () => { 
    const { totalQuantity } = useCart()
    return(
            <Link to='/cart' className='btn btn-danger btnCart' style={{display: totalQuantity > 0 ?'block' : 'none'}}>
                 <img src={cart} alt="cart-widget" className={style.imgCart}/>
                 {totalQuantity}
            </Link>
    )
 }

 export default CartWidget