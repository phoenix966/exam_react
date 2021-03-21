import {useEffect,useState} from 'react';
import './header.sass';
import present from '../../assets/img/add.jpg';
import logo from '../../assets/img/logo.png';
import {FaPlus,FaGamepad,FaAngleUp} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import MobileMenu from '../../components/mobile/MobileMenu';

function Header() {
    const [OpenBurger,setOpenBurger] = useState(false);

    let actionOnBurgerClick =()=>{
        OpenBurger ? setOpenBurger(false) : setOpenBurger(true);
        };

    return (
        <div className="header header--mix">
            <div className="header__wrap">
                    <img src={logo} alt="logo" className="header__img"/>
            </div>
            <span onClick={actionOnBurgerClick} className={OpenBurger ? 'header__elem opened' : 'header__elem'}><FaAngleUp/></span>
            <ul className="nav list--reset">
                <li className="nav__wrap"><NavLink to="/" exact className="nav__link link--reset"><FaGamepad/> Main menu </NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-list" exact className="nav__link link--reset">Blogs</NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog2" exact className="nav__link link--reset">Blog</NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-editor" exact className="nav__link link--reset"><FaPlus/> Redact </NavLink></li>
            </ul>
            <div className="header__present">
                <img src={present} alt="present" className="header__img"/>
            </div>
            {OpenBurger ? <MobileMenu/> : null}
        </div>
    )
}

export default Header
