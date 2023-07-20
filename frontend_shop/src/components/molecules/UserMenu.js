import heart from '../atoms/images/heart.svg';
import basket from '../atoms/images/basket.svg';
import user from '../atoms/images/user.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext, CartContext } from '../../Context';
import Linkwithicon from '../atoms/Linkwithicon';

function UserMenu() {
    const userContext = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext);

    var sumDiscount = 0;
    cartData.map((item, index) => {
        sumDiscount += parseInt(item.product.discount);
    });

    return(
        <>
            <div className="d-flex flex-row justify-content-between text-secondary align-items-center" style={{width: 36 + '%'}}>
                <Linkwithicon linkwithicon = {[heart, "secondary", "Избранное", "#"]}/>
                <img src={user} style={{paddingTop: 1 +'%'}}></img>
                {userContext[0] !== 'true' &&
                <>
                <li className="nav-item dropdown" style={{"list-style-type": "none"}}>
                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Вход/Регистрация</a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/customer/register">Регистрация</Link></li>
                <li><Link className="dropdown-item" to="/customer/login">Войти</Link></li>
                </ul>
                </li>
                </>
                }
                {userContext[0] === 'true' &&
                <>
                <li className="nav-item dropdown" style={{"list-style-type": "none"}}>
                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">{userContext[1]}</a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/customer/logout">Выйти</Link></li>
                </ul>
                </li>
                </>
                }
                
                <Linkwithicon linkwithicon = {[basket, "secondary", sumDiscount + " Р / " + cartData.length + " шт.", "/checkout"]}/>
            </div>
        </>
    )
}

export default UserMenu;
