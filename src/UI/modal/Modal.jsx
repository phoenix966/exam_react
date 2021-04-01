import './modal.sass'

function Modal(props) {
    return (
        <div className={props.show ? 'modal active' : 'modal'}>
            <div className="modal__window">
                {props.children}
            </div>
        </div>
    )
}

export default Modal
