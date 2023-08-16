import './App.scss';
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import withMainLayout from './withMainLayout';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={withMainLayout(HomePage)}></Route>
          <Route path="/booking" element={withMainLayout(BookingPage)}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
