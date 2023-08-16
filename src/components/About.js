import restoImg from './../assets/restaurant chef B.jpg'

export default function About() {
    return (
        <section className="about contain-width">
            <div class="description">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <p>Bacon ipsum dolor amet meatball doner tri-tip salami porchetta sausage rump tongue jerky shoulder ribeye f</p>
            </div>
            <div class="hero-image">
                <img className="rounded" height={260} src={restoImg} alt="Restaurant Food" />
            </div>
        </section>
    )
}