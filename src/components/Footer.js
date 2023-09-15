import { Link } from "react-router-dom";
import Nav from './Nav'
import logo from './../assets/logo-vertical.png'

export default function Footer() {
    const contact = [
        { link: '/address', name: '7292 Dictum Av. San Antonio MI 47096' },
        { link: '/contact', name: '+111111-11-11' },
        { link: '/email', name: 'littlelemon@email.com' },
    ]
    const socials = [
        { link: '/fb', name: 'Facebook', target: '_blank'},
        { link: '/twitter', name: 'Twitter' },
    ]
    return (
        <footer>
            <div className="contain-width">
                <section>
                    <Link to="/">
                        <img height="240" src={logo} alt="Little Lemon Logo" />
                    </Link>
                </section>
                <section>
                    <h2>Links</h2>
                    <Nav hideLogo></Nav>
                </section>
                <section>
                    <h2>Contacts</h2>
                    <Nav hideLogo links={contact}></Nav>
                </section>
                <section>
                    <h2>Social Media</h2>
                    <Nav hideLogo links={socials}></Nav>
                </section>
            </div>
        </footer>
    )
}