import React, { useState, useRef } from "react";

// Navigation Component
import Nav from "./Nav";

import useDetectOutsideClick from "./UseDetectOutsideClick";

const Header = () => {
    const [isMenuShowing, setIsMenuShowing] = useState(false);

    const menuRef = useRef(null);

    useDetectOutsideClick(menuRef, () => setIsMenuShowing(false));

    // Get the menu button 'click' event
    const toggleMenu = () => !isMenuShowing ? openMenu() : closeMenu();

    const openMenu = () => setIsMenuShowing(true);

    const closeMenu = () => setIsMenuShowing(false);

    return (
        <div ref={menuRef}>
            <div
                className={`menu-btn ${isMenuShowing ? "close" : ""}`}
                onClick={toggleMenu}>
                <div className="btn-line" />
                <div className="btn-line" />
                <div className="btn-line" />
            </div>

            {/* Navigation Menu */}
            <Nav isMenuShowing={isMenuShowing} toggleMenu={toggleMenu} />
        </div>
    );
};

export default Header;