
import './post.sass'
import {FaStar,FaTimesCircle,FaEdit} from 'react-icons/fa'
import {formatDate} from '../../utils/FormatDate'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


function Post(props) {
    const auth = useSelector((state)=>state.auth)
    
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
                        <img src={props.img} alt="info" className="post__img"/>
                        <div className={auth ? 'post__remove' : 'post__remove hide'} onClick={props.remove}>
                            <FaTimesCircle/>
                        </div>
                        <div className={auth ? "post__edit" : "post__edit hide"} onClick={()=>props.edit(props.id)}>
                            <FaEdit/>
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
                        <Link onClick={props.click} to={"/blog-list/" + props.id} className="post__btn">Read More</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Post
