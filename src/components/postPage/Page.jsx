import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './page.sass'
import img from '../post/post.jpg'
import Comment from '../comment/Comment'
import ava_1 from '../../assets/img/ava_1.jpg'
import ava_2 from '../../assets/img/ava_2.jpg'
import {useSelector} from 'react-redux'
import { formatDate } from '../../utils/FormatDate'
import axios from '../../myAxiosInstance'

function Page() {
    const data = useSelector((state)=>state.bigPost);
    const [post,setPost] = useState({})
    const [loading, setloading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        if(data.length !== 0) {
            setPost(data[0]);
            setloading(false);
            console.log('data has');
        } else {
            axios.get(`/blog/${id}.json`).then((response)=>{
                setPost(response.data);
                setloading(false);
                console.log('request');
            })
        }
    }, [id, data])

    if(loading) {
        return <h3>Loading...</h3>    
    }

    return (
        <div className="page">
            <div className="page__header"> 
                <h3 className="page__title page__title--mix">Blog page:</h3>
            </div>
            <section className="page__body">
                <div className="container">
                    <div className="page__picture">
                        <img src={img} alt="img" className="page__img"/>
                    </div>
                    <p className="page__date">{post ? formatDate(post.date) : null}</p>
                    <h1 className="page__title">{post ? post.title : null}</h1>
                    <div className="page__wrap">
                        <p className="page__text">{post ? post.author : null}</p>
                        <p className="page__text">in <a className="page__link" href="#games">Games</a></p>
                        <p className="page__text">2 comments</p>
                    </div>
                    <div className="page__info">
                        <div dangerouslySetInnerHTML={{__html: `${post.text}`}}/>
                    </div>
                </div>
            </section>
            <section className="page__comment">
               <div className="container">
                    <h4 className="page__counter">Comments(2)</h4>
                  <div className="page__comments">
                      <Comment name="Jane Ouster" ava={ava_1}/>
                      <Comment name="Alex Stourm" ava={ava_2}/>
                  </div>
               </div>
            </section>
            <section className="page__post">
                <div className="container">
                    <h5 className="page__title page__title--margin">Leave comments here:</h5>
                    <form className="page__form">
                        <div className="page__box">
                            <textarea className="page__area" name="comments" placeholder="Enter your comment here =>"></textarea>
                        </div>
                        <div className="page__buttons">
                            <button className="page__btn">Post Comment</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Page
