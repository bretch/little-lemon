import { Link } from "react-router-dom";
import Nav from './Nav'
import logo from './../assets/logo-vertical.png'

export default function Footer() {
    return (
        <footer>
            <div className="contain-width">
                <section>
                    <Link to="/">
                        <img height="180" src={logo} alt="Little Lemon Logo" />
                    </Link>
                </section>
                <section>
                    <h3>Links</h3>
                    <Nav hideLogo></Nav>
                </section>
                <section>
                    <h3>Contacts</h3>
                    <Nav hideLogo></Nav>
                </section>
                <section>
                    <h3>Social Media</h3>
                    <Nav hideLogo></Nav>
                </section>
            </div>
        </footer>
    )
}