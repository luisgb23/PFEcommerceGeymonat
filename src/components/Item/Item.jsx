import {Link} from 'react-router-dom'
import style from './Item.module.css'
const Item = ({ id, name, img, price, stock }) => {
    return (
            <article className="card cardProd">
                <header>
                    <h2 className="text-center">{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className={style.imgCard} />
                </picture>
                <section className="card-body">
                    <p className='text-center'>Precio: {price}</p>
                </section>
                <footer className='text-center'>
                    <Link to={`/item/${id}`} className='btn btn-outline-danger btnDetail'>Ver detalle</Link>
                </footer>
            </article>
    )
}

export default Item