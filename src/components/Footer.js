import Nav from './Nav'
import logo from './../assets/Logo.svg'

export default function Footer() {
    return (
        <footer className="contain-width">
            <section>
                <img src={logo} alt="Little Lemon Logo" />
            </section>
            <section><Nav hideLogo></Nav></section>
            <section><Nav hideLogo></Nav></section>
            <section><Nav hideLogo></Nav></section>
        </footer>
    )
}