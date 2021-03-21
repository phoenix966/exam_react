import React, { useState,useEffect } from 'react'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import './bloglist.sass'
import axios from '../../myAxiosInstance'

function BlogList() {
    const [info,setInfo] = useState([])

    useEffect(()=>{
        axios.get('/blog.json')
            .then((response)=>{
                let array = []
                for(let key in response.data){
                    response.data[key].key = key
                    array.push(response.data[key])
                }
                setInfo(array)
            })
    },[])

    let actionOnRemove=(key)=>{
        let infoState = [...info]
        let index = infoState.findIndex(item=>{
            if(item.key === key){
                return item
            }
        })
        infoState.splice(index,1)
        setInfo(infoState)
    }
    return (
        <div className="blog">
            <div className="container blog__container">
                <div className="blog__wrapper">
                    {info.map((item)=>{
                        return(
                            <Post remove={()=>actionOnRemove(item.key)} key={item.key} title={item.title} author={item.author} text={item.text} date={item.date}/>
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
