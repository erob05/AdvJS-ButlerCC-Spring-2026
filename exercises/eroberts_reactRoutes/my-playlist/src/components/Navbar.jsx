import { useState } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    // State variable to manage the menu state
    const [isExpanded, setIsExpanded] = useState(false);

    // event handler for menu button click
    const handleMenuClick = () => {
        // use the previous state to determine the new state
        setIsExpanded(prev => !prev);  
    };

    // get the icon based on the menu state
    const icon = (isExpanded) ? "✖" : "☰";

    // get the CSS classes based on the menu state
    const menuClass = (isExpanded) ? 'nav-menu show' : 'nav-menu';

    // function to close the menu when a link is clicked
    const closeMenu = () => setIsExpanded(false)

    return (
        <nav className="navbar">
            <button className="menu-button" aria-label="Toggle menu"
                onClick={handleMenuClick}>{icon}</button>
            <div className={menuClass}>
                <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
                <NavLink to="/add" onClick={closeMenu}>Add Song</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;