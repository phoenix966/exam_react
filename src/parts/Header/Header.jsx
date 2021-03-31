import {useState} from 'react';
import './header.sass';
import present from '../../assets/img/present.jpg';
import logo from '../../assets/img/logo.png';
import {FaPlus,FaMagic,FaAngleUp,FaAsymmetrik,FaGhost} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import MobileMenu from '../../components/mobile/MobileMenu';
import Modal from '../../UI/modal/Modal';

function Header() {
    const [OpenBurger,setOpenBurger] = useState(false);

    let actionOnBurgerClick =()=>{
        OpenBurger ? setOpenBurger(false) : setOpenBurger(true);
        };

    return (
        <div className="header header--mix">
            {/* <Modal>
                <form>
                    <div className="modal__wrapper">
                       <div className="modal__row">
                            <div className="modal__wrap">
                                <input type="text" className="modal__input"/>
                            </div>
                            <div className="modal__wrap">
                                <input type="text" className="modal__input"/>
                            </div>
                       </div>
                       <div className="modal__buttons">
                           <button className="modal__btn">Auth</button>
                           <button className="modal__btn">Exit</button>
                       </div>
                    </div>
                </form>
            </Modal> */}
            
            <div className="header__wrap">
                    <img src={logo} alt="logo" className="header__img"/>
            </div>
            <span onClick={actionOnBurgerClick} className={OpenBurger ? 'header__elem opened' : 'header__elem'}><FaAngleUp/></span>
            <ul className="nav list--reset">
                <li className="nav__wrap"><NavLink to="/" exact className="nav__link link--reset"><span><span className="nav__element"><FaAsymmetrik/></span>Main menu</span></NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-list" exact className="nav__link link--reset"><span><span className="nav__element"><FaMagic/></span>Blogs</span></NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-editor" exact className="nav__link link--reset"><span><span className="nav__element"><FaPlus/></span>Redact</span></NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-editor" exact className="nav__link link--reset"><span><span className="nav__element"><FaGhost/></span>Auth</span></NavLink></li>
            </ul>
            <div className="header__present">
                <img src={present} alt="present" className="header__img"/>
            </div>
            {OpenBurger ? <MobileMenu click={actionOnBurgerClick}/> : null}
        </div>
    )
}

export default Header
