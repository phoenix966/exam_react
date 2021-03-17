import React from 'react'
import './social.sass'
import {FaPinterest,FaInstagram,FaFacebook,FaTwitter,FaYoutube,FaTumblr}  from 'react-icons/fa'

function Social() {
    return (
        <div className="social">
            <div className="container social__container">
                <ul className="social__list list--reset">
                    <li className="social__element"><span><FaInstagram/></span> Instagram</li>
                    <li className="social__element"><span><FaPinterest/></span> Pinterest</li>
                    <li className="social__element"><span><FaFacebook/></span> Facebook</li>
                    <li className="social__element"><span><FaTwitter/></span> Twitter</li>
                    <li className="social__element"><span><FaYoutube/></span> Youtube</li>
                    <li className="social__element"><span><FaTumblr/></span> Tumblr</li>
                </ul>
            </div>
        </div>
    )
}

export default Social
