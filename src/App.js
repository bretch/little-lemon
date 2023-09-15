import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import BookingConfirmedPage from './pages/BookingConfirmedPage';
import PlaceholderPage from "./pages/PlaceholderPage";

const emptyPages = [
  {path: '/about', title: 'About Little Lemon'},
  {path: '/menu', title: 'Menu'},
  {path: '/order-online', title: 'Order Online'},
  {path: '/login', title: 'Login'},
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={<BookingPage/>}></Route>
        <Route path="/booking-confirmed" element={<BookingConfirmedPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        {emptyPages.map(page => <Route key={page.path} path={page.path} element={<PlaceholderPage title={page.title}/>}></Route>)}
      </Routes>
    </BrowserRouter>
  )
}

export default App;