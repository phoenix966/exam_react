import React from 'react'
import './comment.sass'

function Comment(props) {
    return (
        <div className="comment comment--margin">
            <div className="comment__ava">
                <img src={props.ava} alt="ava" className="comment__img"/>
            </div>
            <div className="comment__wrap">
                <div className="comment__row">
                    <div className="comment__status"></div>
                    <h4 className="comment__title">{props.name}</h4>
                    <a href="#ava" className="comment__link">Reply</a>
                </div>
                <p className="comment__date">2021 April</p>
                <p className="comment__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
                </p>
            </div>
        </div>
    )
}

export default Comment
