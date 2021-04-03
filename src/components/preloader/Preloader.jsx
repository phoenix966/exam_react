import React from 'react'
import './preloader.sass'


function Preloader() {
    return (
        <div className="preloader">
            <div className="loader">
                <div className="l_main">
                <div className="l_square"><span></span><span></span><span></span></div>
                <div className="l_square"><span></span><span></span><span></span></div>
                <div className="l_square"><span></span><span></span><span></span></div>
                <div className="l_square"><span></span><span></span><span></span></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
