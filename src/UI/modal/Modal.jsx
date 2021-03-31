import React from 'react'
import './modal.sass'

function Modal(props) {
    return (
        <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__window">
                        {props.children}
                    </div>
                </div>
        </div>
    )
}

export default Modal
