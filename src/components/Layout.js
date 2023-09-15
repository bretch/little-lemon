import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const location = useLocation();

    // scroll to top of page on route change
    useEffect(() => {
      const root = document.getElementById('root')
      root.scrollIntoView()
    }, [location]);

    return (
        <>
            <Header></Header>
            <main style={{ paddingTop: '84px' }}>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout