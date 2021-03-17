// import {useEffect,useState} from 'react'
import './header.sass'
import present from '../../assets/img/add.jpg'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
        <div className="header header--mix">
            <div className="header__wrap">
                <img src={logo} alt="logo" className="header__img"/>
            </div>
            <ul className="nav list--reset">
                <li className="nav__wrap"><a href="#list" className="nav__link link--reset">Main menu</a></li>
                <li className="nav__wrap"><a href="#right" className="nav__link link--reset">Blog</a></li>
                <li className="nav__wrap"><a href="#gor" className="nav__link link--reset">Blog</a></li>
                <li className="nav__wrap"><a href="#score" className="nav__link link--reset">Blog</a></li>
            </ul>
            <div className="header__present">
                <img src={present} alt="present" className="header__img"/>
            </div>
        </div>
    )
}

export default Header
