import Search from '../molecules/Search';
import SocialNets from '../molecules/SocialNets';
import UserMenu from '../molecules/UserMenu';
import NavInfo from '../molecules/NavInfo';
import ButtonCatalog from '../atoms/ButtonCatalog';
import Logo from '../atoms/Logo';

function Header() {
    return (
      <>
      <nav className="navbar navbar-expand text-light d-flex flex-row justify-content-between" style={{fontSize: 1 + 'em', paddingRight: 5 + '%', paddingLeft: 5 + '%', 'background-color': 'rgb(68, 114, 196)'}}>
        <NavInfo/>
        <SocialNets/>
      </nav>
      <nav className="navbar container-fluid d-flex flex-row justify-content-around align-items-center border-bottom border-secondary border-opacity-10" style={{width: "90vw"}}>
        <Logo/>
        <form className="d-flex flex-row">
          <ButtonCatalog/>
          <Search/>
        </form>
        <UserMenu/>
      </nav>
    </>
    )
}

export default Header;
