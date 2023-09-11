import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={<BookingPage/>}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;