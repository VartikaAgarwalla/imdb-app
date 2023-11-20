import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <span className="link"><Link to="/">Movie List</Link></span>
            <span  className="link"><Link to="/favourites">Favourites</Link></span>
            <span  className="link"><Link to="/add-movie">Add Movie</Link></span>
        </div>
    )
}

export default Header;