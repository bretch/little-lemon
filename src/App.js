import './App.scss';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main></Main>
      <Footer>
        {/* <Nav></Nav> */}
      </Footer>
    </>
  )
}

export default App;
