import {useState,useEffect} from 'react';
import './header.sass';
import present from '../../assets/img/present2.webp';
import logo from '../../assets/img/logo.png';
import {FaPlus,FaMagic,FaAngleUp,FaAsymmetrik,FaGhost,FaTimes} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import MobileMenu from '../../components/mobile/MobileMenu';
import Modal from '../../UI/modal/Modal';
import {useSelector,useDispatch} from 'react-redux'
import firebase, {auth} from '../../config/firebaseConfig'
import {loginTo,logOut} from '../../store/actions/blogAction'

// const emptyObject = {
//     email:'',
//     pass:''
// }

function Header() {
    const [OpenBurger,setOpenBurger] = useState(false);
    const [modalShow,setModalShow] = useState(false)

    const [user,setAuth] = useState({
        email:'',
        pass:''
    })
    const login = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    
    const authOnChange =(e)=>{
        e.preventDefault()
        let input = e.target.name
        let value = e.target.value
        setAuth({
            ...user,
            [input]: value
        })
    }
    const authSubmit =(e)=>{
        e.preventDefault()

        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.pass)
                .then(()=>{
                    dispatch(loginTo())
                    setModalShow(false)
                }).catch(error=>{
                    console.log(error);
                })
    }
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                dispatch(loginTo())
            }
        })
    }, [])
    const onLogOut =(e)=>{
        e.preventDefault()
        firebase.auth().signOut()
            .then(()=>{
                dispatch(logOut()) 
                setModalShow(false)
            })
    }

    let actionOnBurgerClick =()=>{
        OpenBurger ? setOpenBurger(false) : setOpenBurger(true);
        };

    const isOpen =()=>{
        modalShow ? setModalShow(false) : setModalShow(true)
    }

    return (
    <>
        <Modal show={modalShow}>
            <form onSubmit={(e)=> authSubmit(e)}>
                <div onClick={isOpen} className="modal__across"><FaTimes/></div>
                <div className="modal__wrapper">
                    <div className="modal__row">
                        <div className="modal__wrap">
                            <input onChange={(e)=>authOnChange(e)} name="email" placeholder="Enter your Email" type="email" className="modal__input"/>
                        </div>
                        <div className="modal__wrap">
                            <input onChange={(e)=>authOnChange(e)} name="pass" placeholder="Enter your password" type="text" className="modal__input"/>
                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="modal__btn">Login</button>
                        <button onClick={(e)=>onLogOut(e)} className="modal__btn">LogOut</button>
                    </div>
                </div>
            </form>
        </Modal>
        <div className="header header--mix">
            <div className="header__wrap">
                    <img src={logo} alt="logo" className="header__img"/>
            </div>
            <span onClick={actionOnBurgerClick} className={OpenBurger ? 'header__elem opened' : 'header__elem'}><FaAngleUp/></span>
            <ul className="nav list--reset">
                <li className="nav__wrap"><NavLink to="/" exact className="nav__link link--reset"><span><span className="nav__element"><FaAsymmetrik/></span>Main menu</span></NavLink></li>
                <li className="nav__wrap"><NavLink to="/blog-list" exact className="nav__link link--reset"><span><span className="nav__element"><FaMagic/></span>Blogs</span></NavLink></li>
                <li className={login ? "nav__wrap" : "nav__wrap hide"}><NavLink to="/blog-editor" exact className="nav__link link--reset"><span><span className="nav__element"><FaPlus/></span>Create post</span></NavLink></li>
                <li className="nav__wrap"><a onClick={isOpen} href="#modal" className="nav__link link--reset"><span><span className="nav__element"><FaGhost/></span>Login</span></a></li>
            </ul>
            <div className="header__present">
                <img src={present} alt="present" className="header__img"/>
            </div>
            {OpenBurger ? <MobileMenu click={actionOnBurgerClick}/> : null}
        </div>
    </>
    )
}

export default Header
