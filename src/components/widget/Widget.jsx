import React from 'react'
import './widget.sass'

function Widget() {
    return (
        <div className="widget">
            <h4 className="widget__title">April 1, 2019</h4>
            <p className="widget__text">10 Amazing new games</p>
            <div className="widget__wrap">
                <p className="widget__link">By Admin</p>
                <p className="widget__link">in <a href="#widget">Games</a></p>
                <p className="widget__link">3 Comments</p>
            </div>
        </div>
    )
}

export default Widget
