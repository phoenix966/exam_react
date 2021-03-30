
import './post.sass'
import {FaStar,FaTimesCircle} from 'react-icons/fa'
import post from './post.jpg'
import {formatDate} from '../../utils/FormatDate'
import { Link } from 'react-router-dom'


function Post(props) {
    
    let createMarkUp =()=>{
        return {__html: `${props.text}`}
    }
    let createComponent=()=>{
        return (
            <div dangerouslySetInnerHTML={createMarkUp()}/>
        )
    }
    return (
        <div className="post">
                <ul className="post__list list--reset">
                    <li className="post__picture">
                        <img src={post} alt="info" className="post__img"/>
                        <div className="post__remove" onClick={props.remove}>
                            <FaTimesCircle/>
                        </div>
                    </li>
                    <li className="post__date">{formatDate(props.date)}</li>
                    <li className="post__title">{props.title}</li>
                    <li className="post__wrap">
                        <p className="post__text">{props.author}</p>
                        <p className="post__text">in <a href="#gam">Games</a></p>
                        <p className="post__text">3 Comments</p>
                    </li>
                    <li className="post__element"><span><FaStar/><FaStar/><FaStar/><FaStar/></span><FaStar/></li>
                    <li className="post__info">{createComponent()}</li>
                    <li className="post__buttons">
                        <Link onClick={props.click} to="/blog-page" className="post__btn btn">Read More</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Post
