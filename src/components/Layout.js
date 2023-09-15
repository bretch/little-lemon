import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
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