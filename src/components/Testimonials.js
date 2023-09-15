import TestimonialCard from "./TestimonialCard"

export default function Hero () {
    const testimonials = [
        { starRating: 5, rating: 'Best resto in town!' , client: 'Stephanie', avatarSrc: 'testimonial-avatar.png'},
        { starRating: 5, rating: 'Best resto in town!' , client: 'Jake', avatarSrc: 'testimonial-avatar.png'},
        { starRating: 5, rating: 'Best resto in town! Lorem ipsum' , client: 'Jane', avatarSrc: 'testimonial-avatar.png'},
        { starRating: 5, rating: 'Best resto in town!' , client: 'Gale', avatarSrc: 'testimonial-avatar.png'},
    ]
    return (
        <section className='testimonials contain-width'>
            <h2 className="centered">Testimonials</h2>
            <main>
                {testimonials.map(testimonial => <TestimonialCard key={testimonial.client} {...testimonial}></TestimonialCard>)}
            </main>
        </section>
    )
}