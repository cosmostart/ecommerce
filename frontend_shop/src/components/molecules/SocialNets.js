import instagram from '../atoms/images/instagram.svg';
import whatsapp from '../atoms/images/whatsapp.svg';
import { Link } from 'react-router-dom';
import Linkwithicon from '../atoms/Linkwithicon';

function SocialNets() {
    return(
        <>
        <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
            <Linkwithicon linkwithicon = {[instagram, "white", "logo", "#"]}/>
            <Linkwithicon linkwithicon = {[whatsapp, "white", "Whatsapp", "#"]}/>
        </div>
        </>
    )
}

export default SocialNets;
