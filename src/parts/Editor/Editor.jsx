import React from 'react'
import './editor.sass'

function Editor() {
    return (
        <div className="editor">
            <h2 className="editor__title">Create new post</h2>
                <form>
                    <div className="container editor__container">
                        <div className="editor__wrap">
                            <div className="editor__box">
                                <input name="name" type="text" className="editor__input" placeholder="Your Name?"/>
                            </div>
                            <div className="editor__box">
                                <input name="email" type="email" className="editor__input" placeholder="Your Email?"/>
                            </div>
                        </div>
                        <div className="editor__wrap">
                            <div className="editor__wrapper">
                                <textarea name="comment" className="editor__area" placeholder="Your new text for blog"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="container editor__container--flex">
                    <button className="editor__btn">Create blog</button>
                    <button className="editor__btn">Upload image</button>
                </div>
            </div>
    )
}

export default Editor
