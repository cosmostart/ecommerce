function ButtonCarouselNext() {
    return (
        <button className="carousel-control-next" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-left": "10vw"}}></span>
                <span className="visually-hidden">Next</span>
        </button>
    )
}

export default ButtonCarouselNext;
