import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <ChakraProvider>
            <Header></Header>
            <main style={{ paddingTop: '84px'}}>
                {children}
            </main>
            <Footer></Footer>
        </ChakraProvider>
    )
}

export default Layout