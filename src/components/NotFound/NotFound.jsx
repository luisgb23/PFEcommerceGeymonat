import { Link } from 'react-router-dom'
import notFound from './assets/404.png'
import style from './NotFound.module.css'
const NotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <img src={notFound} className={style.img} />
            </div>
            <div className="text-center mt-4">
                <h3>Pagina no encontrada</h3>
                <Link to='/' className='btn btn-secondary mt-4'>Vover a Ecommerce</Link>
            </div>

        </>
    )
}

export default NotFound