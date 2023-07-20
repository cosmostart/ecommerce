import NavLink from '../atoms/NavLink';

function NavInfo(props) {
    return(
        <>
            <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
            <NavLink navLink = {["#", "Контакты"]}/>
            <NavLink navLink = {["#", "О нас"]}/>
            <NavLink navLink = {["#", "Доставка"]}/>
            </div>
        </>
    )
}

export default NavInfo;
