
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Details.css'

const Details = () => {
  const navigate = useNavigate();
  const [image, setimage] = useState('');
  const [author, setauthor] = useState('')
  const [location, setlocation] = useState('')
  const [description, setdescritpion] = useState("");
  const likes = Math.floor(Math.random() * 500);
  // const [msg, setmsg] = useState(<div></div>);

  const uploadPost = async (e) => {
    // if (image.length === 0 || author.length === 0 || location.length === 0 || description.length === 0) {
    //   setmsg(<div className='details'>
    //     Please Fill your Details
    //   </div>)
    // }
    // else 
    // {
      const formData = new FormData();
      // Map => takes the data in the key value format 
      formData.append("image", image)
      formData.append("author", author)
      formData.append("location", location)
      formData.append("description", description)
      formData.append("likes", likes)

       fetch("https://insta-app-18wr.onrender.com/api/post", {
        method: 'POST',
        body: formData
      })

      navigate("/instaclone");

  }

  return (
    <div>
      <div className='form'>
        <div className='div'>
          <form onSubmit={uploadPost} className="inside-form">
            <input type="file" name='image' onChange={(e) => setimage(e.target.files[0])} /><br />
            <input type="text" placeholder='Author' value={author} onChange={(e) => setauthor(e.target.value)} /><br />
            <input type="text" placeholder='Location' value={location} onChange={(e) => setlocation(e.target.value)} /><br />
            <input type="text" placeholder='Description' value={description} onChange={(e) => setdescritpion(e.target.value)} /><br />
            <button type='submit' className='btn'>Post</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Details

