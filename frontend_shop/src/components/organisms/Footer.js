import CopyRight from "../atoms/CopyRight";
import Columns from "../molecules/Columns";

function Footer() {
    return(
        <div className="mt-4 container-fluid" style={{'background-color': 'rgb(68, 114, 196)'}}>
            <footer className="py-4">
            <nav className="container d-flex flex-row justify-content-between" style={{width: "90vw", height: "222px"}}>
                    <Columns columns = {["LOGO", ["#", "Связаться с нами"], ["#", "Политика конфиденциальности"], ["#", "Пользовательское соглашение"]]}/>
                    <Columns columns = {["Каталог", ["#", "Одежда"], ["#", "Обувь"], ["#", "Верхняя одежда"], ["#", "Домашняя одежда"]]}/>
                    <Columns columns = {["", ["#", "Купальники"], ["#", "Аксессуары"], ["#", "Идеи для подарков"], ["#", "Marina Rinaldi"]]}/>
                    <Columns columns = {["О компании", ["#", "О нас"], ["#", "Контакты"], ["#", "Доставка"]]}/>
                </nav>
                <div className="d-flex flex-column flex-sm-row justify-content-end border-top">
                    <CopyRight/>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
