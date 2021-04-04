import React from 'react'
import Social from '../../components/social/Social'
import Widget from '../../components/widget/Widget'
import './footer.sass'
import {FaHeart} from 'react-icons/fa'
import logo from '../../assets/img/logo.png'

function Footer() {
    return (
    <>
        <div className="footer footer--mix">
            <div className="container footer__container">
                <div className="footer__wrap">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" className="footer__img"/>
                    </div>
                    <p className="footer__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel placeat natus voluptatum fugit deserunt dolorum enim aperiam neque nihil adipisci!
                    </p>
                </div>
                <ul className="footer__list list--reset">
                    <li className="footer__link">Usfull Links</li>
                    <li className="footer__link">Games</li>
                    <li className="footer__link">Testimonials</li>
                    <li className="footer__link">Reviews</li>
                    <li className="footer__link">Characters</li>
                    <li className="footer__link">Latest News</li>
                </ul>
                <ul className="footer__list list--reset">
                    <li className="footer__link">Services</li>
                    <li className="footer__link">About Us</li>
                    <li className="footer__link">Services</li>
                    <li className="footer__link">Become writer</li>
                    <li className="footer__link">Jobs</li>
                    <li className="footer__link">FAQ</li>
                </ul>
                <ul className="footer__list list--reset">
                    <li className="footer__link">Careeres</li>
                    <li className="footer__link">Donate</li>
                    <li className="footer__link">Services</li>
                    <li className="footer__link">Subscriptions</li>
                    <li className="footer__link">Careers</li>
                    <li className="footer__link">Our team</li>
                </ul>
                <ul className="footer__list footer__list--margin list--reset">
                    <li className="footer__link">Blogs last comments</li>
                    <li className="footer__link">
                        <Widget/>
                    </li>
                    <li className="footer__link">
                        <Widget/>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="container">
                <p className="footer__copyright">
                    Copyright ©2021 All rights reserved | This template is made with <span><FaHeart/></span> by Colorlib
                </p>
            </div>
        <Social/>
    </>
    )
}

export default Footer
