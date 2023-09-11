import { useReducer, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./../api"
import { getToday } from './../utils'
import availableTimesReducer from './../availableTimesReducer';

import Layout from './../components/Layout'
import BookingForm from './../components/BoookingForm'

export default function BookingPage(props) {
    const navigate = useNavigate();
    const today = getToday()
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, [])
    const handleChangeDate = (date) => fetchAPI(date).then(results => dispatch({ type: 'update', date, availableTimes: results }))
    const handleSubmitForm = formData => submitAPI(formData).then(result => {
        if (result) {
            navigate('/booking-confirmed')
        }
    })

    useEffect(() => {
        fetchAPI(today)
            .then(results => dispatch({ type: 'initialize', date: today, availableTimes: results })
            )
    }, [])

    return (
        <Layout>
            <section className="contain-width">
                <h1>Book Now</h1>
                <main>
                    <BookingForm today={today}
                        availableTimes={availableTimes}
                        onChangeDate={handleChangeDate}
                        onSubmitForm={handleSubmitForm} />
                </main>
            </section>
        </Layout>
    )
}