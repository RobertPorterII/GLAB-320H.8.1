import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className="navbar">
        <Link to="/">Main</Link>
        <Link to="/currencies">Currencies</Link>
        <Link to="/price">Price</Link>

        </nav>
    )
    
}