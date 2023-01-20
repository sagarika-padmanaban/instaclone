import React from "react";
import "./component/instaclonepage/card/card.css"
function Card(post){
    console.log(post.post.image);
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
            <span><i className="fa fa-ellipsis-h" aria-hidden="true" id="ellipse"></i></span>
        </section>
        <section className="card-image">
        <img src={`http://localhost:8080/image/${post.post.image}`} alt='saga'></img>
        </section>
        <section className="card-action">
            <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
            <span><i className="fa fa-paper-plane-o" aria-hidden="true" ></i></span>
            <span>{post.post.date}</span>
        </section>
        <section className="card-like">
        {post.post.likes}likes
        </section>
        <section className="card-description">
        {post.post.description}
        </section>
    </section>
    </>
    )
}
export default Card;