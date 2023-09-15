import restoImg from './../assets/restaurant chef B.jpg'

export default function About() {
    return (
        <section className="about contain-width">
            <div className="description">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <p>Ut ham jerky, beef brisket deserunt nisi sed culpa aliquip magna est laboris veniam leberkas. Pork chop doner kielbasa sed veniam, strip steak beef ribs sunt. Ex dolore aute dolor reprehenderit chislic picanha. Nulla rump andouille bacon irure ad pork pancetta t-bone shoulder jerky.</p>
            </div>
            <div className="hero-image">
                <img className="rounded" height={260} src={restoImg} alt="Restaurant Food" />
            </div>
        </section>
    )
}