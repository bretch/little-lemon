import { useReducer } from 'react'
import availableTimesReducer from './availableTimesReducer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'

function App() {
  const initialAvaiableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvaiableTimes)
  const handleChangeDate = (date) => dispatch({ type: 'initialize', date })

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
