import Hero from './Hero'
import Highlights from './Highlights'
import Testimonials from './Testimonials'
import About from './About'

export default function Main ({children}) {
    return (
        <main>
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}