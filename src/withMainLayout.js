import Header from './components/Header'
import Footer from './components/Footer'

const withMainLayout = (WrappedComponent) => {
    return (
        <>
            <Header></Header>
            <WrappedComponent></WrappedComponent>
            <Footer></Footer>
        </>
    )
}

export default withMainLayout