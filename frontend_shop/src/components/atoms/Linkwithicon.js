import { Link } from 'react-router-dom';

function Linkwithicon(props) {
    return(
        <>
            <div className="d-flex flex-row align-items-center">
            <img src={props?.['linkwithicon']?.[0]} className={"text-" + props?.['linkwithicon']?.[1]} style={{paddingRight: 15 + '%', paddingTop: 5 +'%', width: 50 + 'px', height: 70 + '%'}}></img>
            <Link className="nav-link" to={props?.['linkwithicon']?.[3]} style={{width: 70 + '%'}}>{props?.['linkwithicon']?.[2]}</Link>
            </div>
        </>
    )
}

export default Linkwithicon;
