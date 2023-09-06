import Layout from './../components/Layout'
import BookingForm from './../components/BoookingForm'
export default function BookingPage(props) {
    return (
        <Layout>
            <section className="contain-width">
                <h1>Book Now</h1>
                <main>
                    <BookingForm {...props} />
                </main>
            </section>
        </Layout>
    )
}