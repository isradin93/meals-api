import { Link } from "react-router-dom";

import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__heading">
                <h1>Meals <span>App</span></h1>
            </div>
            <div className="navbar__links">
                <ul className="navbar__list">
                    <Link to="/">
                        <li className="navbar__item">Home</li>
                    </Link>
                    <Link to="/categories">
                        <li className="navbar__item">Categories</li>
                    </Link>
                    <Link to="/random">
                        <li className="navbar__item">Random</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;