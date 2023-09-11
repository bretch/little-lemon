import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Highlights from './../components/Highlights'
import Testimonials from './../components/Testimonials'
import About from './../components/About'

export default function HomePage ({ availableTimes }) {
    return (
        <Layout>
            <div className='homepage'>
                <Hero></Hero>
                <Highlights></Highlights>
                <Testimonials></Testimonials>
                <About></About>
            </div>
        </Layout>
    )
}