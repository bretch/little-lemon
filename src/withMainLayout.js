import Header from './components/Header'
import Footer from './components/Footer'

const withMainLayout = (WrappedComponent) => {
    return (
        <>
            <Header></Header>
            <div style={{ paddingTop: '84px'}}>
                <WrappedComponent></WrappedComponent>
            </div>
            <Footer></Footer>
        </>
    )
}

export default withMainLayout