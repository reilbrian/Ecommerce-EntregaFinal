import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"./category/Accesorio"}>Accesorio</Link>
            </li>
            <li>
                <Link to={"./category/Manga"}>Manga</Link>
            </li>
            <li>
                <Link to={"./category/Figura"}>Figura</Link>
            </li>
            <li className="cart-container">
                <Link to={"/carrito"}>Carrito
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
                </Link>
            </li>
        </ul>
    </nav>
    );
};