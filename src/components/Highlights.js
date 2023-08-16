import { Link } from "react-router-dom";
import MenuCard from './MenuCard'

export default function Hero() {
    const highlights = [
        {
            name: 'Greek Salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            imgSrc: 'greek salad.jpg'
        },
        {
            name: 'Bruchetta',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
            imgSrc: 'bruchetta.svg'
        },
        {
            name: 'Lemon Dessert',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            imgSrc: 'lemon dessert.jpg'
        }
    ]

    return (
        <section className='highlights contain-width'>
            <header>
                <h1>This Week's Specials!</h1>
                <Link to="/order-online" className="btn-link">Order Online</Link>
            </header>
            <main>
                {highlights.map(menu => <MenuCard key={menu.name} {...menu}></MenuCard>)}
            </main>
        </section>
    )
}