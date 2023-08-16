import deliveryIcon from './../assets/delivery.png'
export default function MenuCard (props) {
    const { name, price, description, imgSrc } = props
    return (
        <article className="menu-card">
            <div className="card-img">
                <img src={require(`./../assets/${imgSrc}`)} alt={name} />
            </div>
            <main>
                <header>
                    <h4>{name}</h4>
                    <span>{price}</span>
                </header>
                <p>{description}</p>
                <p className='delivery'>Order a delivery<img height={12} src={deliveryIcon} alt="Delivery Icon" /></p>
            </main>
        </article>
    )
}