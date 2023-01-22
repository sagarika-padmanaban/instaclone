import React from "react";
import "./component/instaclonepage/card/card.css";
import share from './images/share/share.png';
import heart from './images/heart/heart.png';


function Card(post) {
        const date = post.post.date.split("T");
        const likes = post.post.likes
       

        return (
            <>
                <section className="card">
                    <section className="card-header">
                        <div>
                            <div className="card-header_name">
                                {post.post.author}
                            </div>
                            <div className="card-location">
                                {post.post.location}
                            </div>
                        </div>
                        <span className="card-dot">
                            ...
                        </span>
                    </section>
                    <section className="card-image">
                        <img src={`https://insta-app-18wr.onrender.com/api/image/${post?.post?.image}`} alt='saga'></img>
                    </section>
                    {/* <section className="card-action">
            <span>{post.post.date}</span>
        </section> */}
                    <section className="card-action">

                        <span className="card-heart" ><img src={heart} alt="share" width="20px" height="20px"/> </span>
                        <span className="card-heart"> {likes}likes</span>
                        <span className="card-img"><img src={share} alt="share" width="20px" height="20px"></img></span>
                        <span className="card-date">{date[0]}</span>
                    </section>
                    <section className="card-description">
                        {post.post.description}
                    </section>
                </section>
            </>
        )
    }
export default Card;