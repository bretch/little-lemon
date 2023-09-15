import Layout from '../components/Layout'

export default function BookingConfirmedPage() {
    return (
        <Layout>
            <section className='page-container contain-width'>
                <h1>Booking confirmed.</h1>
                <br />
                <main>
                    <p>We sent your booking details to <strong>client@email.com</strong></p>
                    <br />
                    <p> Thank you for booking a table with us! We're looking forward to seeing you at Little Lemon.</p>
                </main>
            </section>
        </Layout>
    )
}