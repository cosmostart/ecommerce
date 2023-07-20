import { Link } from 'react-router-dom';
import { transliterate as slugify } from 'transliteration';
import ButtonAddToCart from '../atoms/ButtonAddToCart';
import ButtonAddToWishlist from '../atoms/ButtonAddToWishlist';

function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-2">
            <div className="card">
            <Link className="text-decoration-none" to={"/product/" + slugify(props.product.name_for_site.toLowerCase()) + "/" + props.product.id}>
            <img src={props.product.product_imgs?.[0]?.image1} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title">{props.product.name_for_site}</h5>
            <h5 className="card-title text-muted">{props.product.price} &#8381;</h5>
            </div>
            </Link>
            <div className="card-footer">
            <ButtonAddToCart/>
            <ButtonAddToWishlist/>
            </div>
            </div>
        </div>
    )
}

export default SingleProduct;
