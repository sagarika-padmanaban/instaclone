
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";


const Details = () => {
  const navigate = useNavigate();
  const [image, setimage] = useState('');
  const [author, setauthor] = useState('')
  const [location, setlocation] = useState('')
  const [description, setdescritpion] = useState("");
  const likes = Math.floor(Math.random() * 500);


  const uploadPost = (e) => {
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
  }  


  return (
    <div>
      <div>

        <form onSubmit={uploadPost}>
          <input type="file" name='image' onChange={(e)=>setimage(e.target.files[0])}/>
          <input type="text" placeholder='Author' value={author} onChange={(e)=>setauthor(e.target.value)}/>
          <input type="text" placeholder='Location' value={location} onChange={(e)=>setlocation(e.target.value)}/>
          <input type="text" placeholder='Description'value={description}  onChange={(e)=>setdescritpion(e.target.value)}/>

          <button type='submit'onClick={()=>navigate(-1)}>Post</button>
        </form>

      </div>

    </div>
  )
}

export default Details

