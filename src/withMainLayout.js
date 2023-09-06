import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

const withMainLayout = (WrappedComponent) => {
    return (
        <ChakraProvider>
            <Header></Header>
            <div style={{ paddingTop: '84px'}}>
                <WrappedComponent></WrappedComponent>
            </div>
            <Footer></Footer>
        </ChakraProvider>
    )
}

export default withMainLayout