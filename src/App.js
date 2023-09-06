import { useReducer } from 'react'
import availableTimesReducer, { initialAvailableTimes } from './availableTimesReducer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'

function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvailableTimes)
  const handleChangeDate = (date) => dispatch({ type: 'update', date })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} onChangeDate={handleChangeDate} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
