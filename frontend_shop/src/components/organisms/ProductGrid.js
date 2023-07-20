import ButtonCarouselPrev from "../atoms/ButtonCarouselPrev";
import ButtonCarouselNext from "../atoms/ButtonCarouselNext";
import SingleProduct from "../molecules/SingleProduct";

function ProductGrid(props) {
    return (
        <>
        <h3 className="mt-4 mb-4 text-center">Новые поступления</h3>
        <div id="carouselNewProducts" className="carousel slide carousel-dark">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row mb-4">
                    {
                            props?.['products'].slice(0, 4).map((product)=><SingleProduct product={product}/>)
                    }
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row mb-4">
                    {
                            props?.['products'].slice(4, 8).map((product)=><SingleProduct product={product}/>)
                    }
                    </div>
                </div>
            </div>
            <ButtonCarouselPrev/>
            <ButtonCarouselNext/>
        </div>
        </>
    )
}

export default ProductGrid;