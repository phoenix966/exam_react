import {NavLink} from 'react-router-dom'
import './mobile.sass'

function MobileMenu(props) {
    return (
        <ul className="mobile__list list--reset">
            <li className="mobile__wrap"><NavLink onClick={props.click} to="/" exact className="mobile__link link--reset">Main menu </NavLink></li>
            <li className="mobile__wrap"><NavLink onClick={props.click} to="/blog-list" exact className="mobile__link link--reset">Blogs</NavLink></li>
            <li className="mobile__wrap"><NavLink onClick={props.click} to="/blog2" exact className="mobile__link link--reset">Blog</NavLink></li>
            <li className="mobile__wrap"><NavLink onClick={props.click} to="/blog-editor" exact className="mobile__link link--reset"> Redact </NavLink></li>
        </ul>
    )
}

export default MobileMenu
