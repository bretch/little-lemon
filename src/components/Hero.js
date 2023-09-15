import foodImg from './../assets/restauranfood-cropped.png'
import { Link } from 'react-router-dom'

export default function Hero(props) {
    const title = props.title || 'Little Lemon'
    const description = props.description || 'Bacon ipsum dolor amet meatball doner tri-tip salami porchetta sausage rump tongue jerky shoulder ribeye'
    return (
        <section className="hero">
            <div className="container contain-width">
                <div className="description">
                    <div className="title">
                        <h1>{title}</h1>
                        {!props.hideSubtitle && <h2>Chicago</h2>}
                    </div>
                    <p>{description}</p>
                    {!props.hideActions && <div className="actions">
                        <Link to="/booking" className='btn-link'>Reserve a Table</Link>
                    </div>}
                </div>
                <div className="hero-image">
                    {/* here to help position hero-image */}
                    <p>non existent text more text</p>
                    <img className="rounded" height={260} src={foodImg} alt="Restaurant Food" />
                </div>
            </div>
        </section>
    )
}