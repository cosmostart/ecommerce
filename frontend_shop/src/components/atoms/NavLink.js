import { Link } from 'react-router-dom';

function NavLink(props) {
    return(
        <Link className="nav-link p-0 text-white" to={props?.['navLink']?.[0]}>{props?.['navLink']?.[1]}</Link>
    )
}

export default NavLink;
