
import './post.sass'
import {FaStar,FaTimesCircle} from 'react-icons/fa'
import post from './post.jpg'

function Post(props) {
    return (
        <div className="post">
                <ul className="post__list list--reset">
                    <li className="post__picture">
                        <img src={post} alt="info" className="post__img"/>
                    </li>
                    <li className="post__date">{props.date}</li>
                    <li className="post__title">{props.title}</li>
                    <li className="post__wrap">
                        <p className="post__text">{props.author}</p>
                        <p className="post__text">in <a href="#gam">Games</a></p>
                        <p className="post__text">3 Comments</p>
                    </li>
                    <li className="post__element"><span><FaStar/><FaStar/><FaStar/><FaStar/></span><FaStar/></li>
                    <li className="post__info">{props.text}</li>
                    <li className="post__buttons">
                        <button className="post__btn btn">Read More</button>
                    </li>
                </ul>
                <div className="post__remove" onClick={props.remove}>
                    <FaTimesCircle/>
                </div>
        </div>
    )
}

export default Post
