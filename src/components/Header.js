import { useState } from 'react'
import { Link } from "react-router-dom";

import menu from './../assets/🦆 icon _hamburger menu.svg'
import logo from './../assets/Logo.svg'
import basket from './../assets/basket .svg'
import Nav from './Nav'
import MobileNavDropdown from './MobileNavDropdown'

export default function Header({ children }) {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const handleClick = e => setMenuOpen(!isMenuOpen)
    return (
        <header className='header-main'>
            <nav className="mobile-nav">
                <img height={18} className='pointer' src={menu} alt="Menu" onClick={handleClick} />
                <Link to="/" className='centered'>
                    <img src={logo} alt="Little Lemon Logo" />
                </Link>
                <img height={24} src={basket} alt="Basket" />
            </nav>
            <Nav className="desktop-nav"></Nav>
            {isMenuOpen && <MobileNavDropdown handleClick={handleClick} />}
        </header>
    )
}