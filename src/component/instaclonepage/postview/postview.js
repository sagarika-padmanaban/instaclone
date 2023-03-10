import { useEffect, useState } from "react";
import Card from "../../../card";
import Header from "../header/header";
function PostView() {
  const [posts , setposts] = useState([]);
  useEffect(()=>{
    fetch("https://insta-app-18wr.onrender.com/api").then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data.data);
      setposts(data.data.reverse())
    }).catch((err)=>{console.log(err)})
  },[])
    
    return (
      <>
      <Header/>
    <div className="post-container">
      {
        posts.map((post,i)=>{
          // const base64String = btoa(unescape(encodeURIComponent(new TextDecoder('utf-8').decode(new Uint8Array(post.image.data.data)))))

        return(
        <Card post={post} key={i}/>
        )
        })
      }
    </div>
    </>
    )
}

export default PostView;