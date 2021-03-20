
import './post.sass'
import {FaStar} from 'react-icons/fa'
import post from './post.jpg'

function Post() {
    return (
        <div className="post">
                <ul className="post__list list--reset">
                    <li className="post__picture">
                        <img src={post} alt="info" className="post__img"/>
                    </li>
                    <li className="post__date">2021 April</li>
                    <li className="post__title">The Quest</li>
                    <li className="post__wrap">
                        <p className="post__text">By Guest</p>
                        <p className="post__text">in <a href="#gam">Games</a></p>
                        <p className="post__text">3 Comments</p>
                    </li>
                    <li className="post__element"><span><FaStar/><FaStar/><FaStar/><FaStar/></span><FaStar/></li>
                    <li className="post__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, at?</li>
                    <li className="post__buttons">
                        <button className="post__btn btn">Read More</button>
                    </li>
                </ul>
        </div>
    )
}

export default Post
