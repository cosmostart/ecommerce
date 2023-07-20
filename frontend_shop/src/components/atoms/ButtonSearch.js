import search from '../atoms/images/search.svg';

function ButtonSearch(props) {  
    const searchProduct = () => {
        window.location.href = '/search/' + props?.['buttonSearch'];
    }

    return(
        <button type="button" onClick={searchProduct} className="btn rounded-0">
            <img src={search}></img>
        </button>
    )
}

export default ButtonSearch;
