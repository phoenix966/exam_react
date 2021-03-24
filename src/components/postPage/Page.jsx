import React from 'react'
import './page.sass'
import back from './back.jpg'
import img from '../post/post.jpg'
import Comment from '../comment/Comment'
import ava_1 from '../../assets/img/ava_1.jpg'
import ava_2 from '../../assets/img/ava_2.jpg'

function Page() {
    return (
        <div className="page">
            <div className="page__header">
                <img src={back} alt="back" className="page__img"/>
                <h3 className="page__title page__title--mix">+ Blog page +</h3>
            </div>
            <section className="page__body">
                <div className="container">
                    <div className="page__picture">
                        <img src={img} alt="img" className="page__img"/>
                    </div>
                    <p className="page__date">2021 March</p>
                    <h1 className="page__title">Title</h1>
                    <div className="page__wrap">
                        <p className="page__text">ByAdmin</p>
                        <p className="page__text">in <a className="page__link" href="#games">Games</a></p>
                        <p className="page__text">2 comments</p>
                    </div>
                    <p className="page__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat quibusdam doloribus maiores provident vero! Quidem reprehenderit tempore sed cum?
                    </p>
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
