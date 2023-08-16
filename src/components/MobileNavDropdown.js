import Nav from './Nav'
import back from './../assets/icon_back.svg'
import logo from './../assets/Logo.svg'

export default function MobileNavDropdown({ handleClick}) {
    return (
        <div className="mobile-nav-dropdown">
            <div>
                <img className='pointer' height={24} src={back} alt="Back" onClick={handleClick} />
                <img className="centered" src={logo} alt="Little Lemon Logo" />
            </div>
            <Nav hideLogo></Nav>
        </div>
    )
}