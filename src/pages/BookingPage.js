import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { useReducer, useEffect } from 'react'
import { fetchAPI, submitAPI } from "./../api"
import { getToday } from './../utils'
import availableTimesReducer from './../availableTimesReducer';

import Layout from './../components/Layout'
import BookingForm from './../components/BoookingForm'

const theme = extendTheme({
    colors: {
        brand: {
            primary: 'rgba(73, 94, 87, 1)',
            secondary: '#F4CE14',
        },
    },
})

export default function BookingPage() {
    const today = getToday()
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, [])
    const handleChangeDate = (date) => fetchAPI(date).then(results => dispatch({ type: 'update', date, availableTimes: results }))
    const handleSubmitForm = formData => submitAPI(formData).then(result => {
        if (result) {
            dispatch({
                type: 'updateBookingTime',
                date: formData.date,
                time: formData.time,
            })
        }
    })

    useEffect(() => {
        fetchAPI(today)
            .then(results => dispatch({ type: 'initialize', date: today, availableTimes: results })
            )
    }, [])

    return (
        <Layout>
            <ChakraProvider theme={theme}>
                <section className="contain-width">
                    <h1>Book Now</h1>
                    <main>
                        <BookingForm today={today}
                            availableTimes={availableTimes}
                            onChangeDate={handleChangeDate}
                            onSubmitForm={handleSubmitForm} />
                    </main>
                </section>
            </ChakraProvider>
        </Layout>
    )
}