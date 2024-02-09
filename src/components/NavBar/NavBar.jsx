import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="navbar nav">
      <Link to='/' className="link">
        <h3 className="title">Ecommerce</h3>
      </Link>
      <div>
        <Link to={`/category/celular`} className="btn btn-danger btnCategory">Celular</Link>
        <Link to={`/category/tablet`} className="btn btn-danger btnCategory">Tablet</Link>
        <Link to={`/category/notebook`} className="btn btn-danger btnCategory">Notebook</Link>
      </div>
      <CartWidget />
    </nav>
  )
}


export default NavBar