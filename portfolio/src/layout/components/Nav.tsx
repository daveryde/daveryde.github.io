import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/DavidCordovaResume.pdf";

interface NavProps {
    isMenuShowing: boolean;
    toggleMenu: () => void;
}

const Nav = ({ isMenuShowing, toggleMenu }: NavProps) => {
    const location = useLocation();

    return (
        <nav className={`menu ${isMenuShowing ? "show" : "close"}`}>
            <ul className={`menu-nav ${isMenuShowing ? "show" : "close"}`}>
                {location.pathname !== "/home" &&
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                }
                {location.pathname !== "/projects" &&
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className="nav-link"
                            onClick={toggleMenu}>
                            Projects
                        </Link>
                    </li>
                }
                <li className="nav-item">
                    <a
                        href={resume}
                        rel="noreferrer"
                        className="nav-link"
                        onClick={toggleMenu}>
                        Resume
                    </a>
                </li>
                {location.pathname !== "/about" &&
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Nav;