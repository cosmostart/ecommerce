function ButtonCarouselPrev() {
    return (
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-right": "10vw"}}></span>
                <span className="visually-hidden">Previous</span>
        </button>
    )
}

export default ButtonCarouselPrev;
