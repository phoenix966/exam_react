import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import './bloglist.sass'

import { getPosts,postReadMore,removePost } from '../../store/actions/blogAction'

function BlogList() {
    const info = useSelector((state)=> state.blogs)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getPosts())
    },[])

    
    const openMoreOnClick=(id)=>{
        dispatch(postReadMore(id))
    }
    

    return (
        <div className="blog">
            <div className="blog__header">
                <div className="blog__title">All blogs:</div>
            </div>
            <div className="container blog__container">
                <div className="blog__wrapper">
                    {info.map((item)=>{
                        return(
                            <Post id={item.id} click={()=> openMoreOnClick(item.id)} remove={()=>dispatch(removePost(item.id))} img={item.img} key={item.id} title={item.title} author={item.author} text={item.text} date={item.date}/>
                        )
                    })}
                </div>
                <div className="blog__wrapper">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default BlogList
