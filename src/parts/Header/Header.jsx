// import {useEffect,useState} from 'react'
import './header.sass'
import present from '../../assets/img/add.jpg'
import logo from '../../assets/img/logo.png'
import {FaPlus,FaGamepad} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className="header header--mix">
            <div className="header__wrap">
                <img src={logo} alt="logo" className="header__img"/>
            </div>
            <ul className="nav list--reset">
                <li className="nav__wrap"><NavLink to="/" exact className="nav__link link--reset"><FaGamepad/> Main menu </NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog" exact className="nav__link link--reset">Blog</NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog2" exact className="nav__link link--reset">Blog</NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog3" exact className="nav__link link--reset"><FaPlus/> Redact </NavLink></li>
               
            </ul>
            <div className="header__present">
                <img src={present} alt="present" className="header__img"/>
            </div>
        </div>
    )
}

export default Header
