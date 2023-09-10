import { useReducer, useEffect } from 'react'
import { fetchAPI, submitAPI } from "./api"
import { getToday } from './utils'
import availableTimesReducer from './availableTimesReducer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'

function App() {
  const today = getToday()
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [])
  const handleChangeDate = (date) => fetchAPI(date).then(results => dispatch({ type: 'update', date, availableTimes: results }))
  const handleSubmitForm = formData => submitAPI(formData).then(result => {
    if (result) {
      // navigate to confirmed booking apge
      alert('should navigate to new page')
    }
  })

  useEffect(() => {
    fetchAPI(today)
      .then(results => dispatch({ type: 'initialize', date: today, availableTimes: results })
      )
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={<BookingPage
            today={today}
            availableTimes={availableTimes}
            onChangeDate={handleChangeDate}
            onSubmitForm={handleSubmitForm} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
