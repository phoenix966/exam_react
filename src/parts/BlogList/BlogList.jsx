import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import './bloglist.sass'

import { addId, editOn, getPosts,postReadMore,removePost } from '../../store/actions/blogAction'

function BlogList(props) {
    const info = useSelector((state)=> state.blogs)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    
    const openMoreOnClick=(id)=>{
        dispatch(postReadMore(id))
    }

    const editOnClick=(id)=>{
        dispatch(addId(id))
        dispatch(editOn())
        let url = `/blog-editor/${id}`
        props.history.push(url)
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
                            <Post id={item.id} click={()=> openMoreOnClick(item.id)} edit={editOnClick} remove={()=>dispatch(removePost(item.id))} img={item.img} key={item.id} title={item.title} author={item.author} text={item.text} date={item.date}/>
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
