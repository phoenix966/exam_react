import React from 'react'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import './bloglist.sass'

function BlogList() {
    return (
        <div className="blog">
            <div className="container blog__container">
                <div className="blog__wrapper">
                    <Post/>
                </div>
                <div className="blog__wrapper">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default BlogList
