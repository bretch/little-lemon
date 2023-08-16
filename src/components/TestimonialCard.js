import starIcon from './../assets/star-rating.png'

export default function TestimonialCard(props) {
    const { starRating = 1, rating, client, avatarSrc } = props
    return (
        <article className="testimonial-card">
            <div className="star-rating">
                {Array(starRating).fill().map(r => <img key={r} src={starIcon} alt='Star Name' />)}
            </div>
            <p>{rating}</p>
            <div className="card-img">
                <img src={require(`./../assets/${avatarSrc}`)} alt='Client Avatar' />
            </div>
            <h3>{client}</h3>
        </article>
    )
}