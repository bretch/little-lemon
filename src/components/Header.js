import {useState} from 'react'

import menu from './../assets/🦆 icon _hamburger menu.svg'
import logo from './../assets/Logo.svg'
import basket from './../assets/basket .svg'
import back from './../assets/icon_back.svg'
import Nav from './Nav'

export default function Header ({children}) {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const handleClick = e => setMenuOpen(!isMenuOpen)
    return (
        <header>
            <nav className="mobile">
                <img src={menu} alt="Menu" onClick={handleClick}/>
                <img className="logo" src={logo} alt="Little Lemon Logo" />
                <img src={basket} alt="Basket" />
            </nav>
            <Nav></Nav>
            {isMenuOpen &&
                <div className="mobile-dropdown">
                    <div>
                        <img height={24} src={back} alt="Back" onClick={handleClick} />
                        <img className="logo" src={logo} alt="Little Lemon Logo" />
                    </div>
                    <Nav hideLogo ></Nav>
                </div>}
        </header>
    )
}