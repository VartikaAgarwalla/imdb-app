

const Banner = ({title, description, imageUrl}) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})`}}>
            <div className="detail">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Banner;