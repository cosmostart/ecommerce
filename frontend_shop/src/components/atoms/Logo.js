import { Link } from 'react-router-dom';

function Logo(props) {
    return(
        <Link to="/" className="text-secondary" style={{fontSize: 2 + 'em', textDecoration: 'none'}}>logo</Link>
    )
}

export default Logo;
