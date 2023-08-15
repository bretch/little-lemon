import foodImg from './../assets/restauranfood.jpg'
export default function Hero () {
    return (
        <div className="hero">
            <div class="text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Bacon ipsum dolor amet meatball doner tri-tip salami porchetta sausage rump tongue jerky shoulder ribeye f</p>
                {/* todo: make this a component */}
                <button>Reserve a Table</button>
            </div>
            <div class="hero-image">
                {/* here to help position hero-image */}
                <p>non existent text more text</p>
                <img height={260} src={foodImg} alt="Restaurant Food" />
            </div>
        </div>
    )
}