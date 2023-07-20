import { Link } from 'react-router-dom';

function SingleCategory(props) {
    const styles = {
        card: {
            content: "", backgroundImage: "url(" + props?.['category']?.[0]?.['image'] + ")", "height" : 7 * props?.['category']?.[1] + "vw", "background-size": "cover", "background-position": "center", "opacity": "0.9"
        }
    };

    return (
        <div className={"col-12 col-md-" + 2 * props?.['category']?.[1] + " mb-2"}>
                <Link className="link-underline-dark" to={"/category/" + props?.['category']?.[0]?.['name_for_site'].toLowerCase() + "/" + props?.['category']?.[0]?.['id']}>
                <div className="bg-image card" style={styles.card}>
                <div className="card-body">
                </div>
                </div>
                </Link>
        </div>
    )
}

export default SingleCategory;
