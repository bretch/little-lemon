import logo from './../assets/Logo.svg'

// @TODO: replace with actual react router-links
export default function Nav({ hideLogo }) {
    const links = [
        { link: 'home', name: 'Home' },
        { link: 'about', name: 'About' },
        { link: 'menu', name: 'Menu' },
        { link: 'reservations', name: 'Reservations' },
        { link: 'order-online', name: 'Order Online' },
        { link: 'login', name: 'Login' },
    ]

    return (
        <nav>
            <ul>
                {!hideLogo && <img src={logo} alt="Little Lemon Logo" />}
                {links.map((link) => <li key={link.link}>{link.name}</li>)}
            </ul>
        </nav>
    )
}