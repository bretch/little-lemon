import logo from './../assets/Logo.svg'
import { Link } from "react-router-dom";

export default function Nav({ hideLogo, className }) {
    const links = [
        { link: '/', name: 'Home' },
        { link: '/#about', name: 'About' },
        { link: '/menu', name: 'Menu' },
        { link: '/booking', name: 'Reservations' },
        { link: '/order-online', name: 'Order Online' },
        { link: '/login', name: 'Login' },
    ]

    return (
        <nav className={className}>
            <ul>
                {!hideLogo && <li><Link to="/"> <img src={logo} alt="Little Lemon Logo" /> </Link></li>}
                {links.map((link) => <li key={link.link}><Link to={link.link}>{link.name}</Link></li>)}
            </ul>
        </nav>
    )
}