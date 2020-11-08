import React, {useState} from 'react'
import axios from 'axios';
import './urlInput.scss'
const API = 'http://localhost:3001/'

export default function UrlInput({setVideos}) {
  const [input, changeInput] = useState("")

  const handleChange = (event) => {
    changeInput(event.target.value)
  }
  
  const handleClick = (event) => {
    axios.post(API, {
      url: input
    }).then(res => setVideos(res.data))
    event.preventDefault()
  }

  return (
    <section className="section urlSection">
        <div className="container">
          <h1><span className="red">YouTube</span> Playlist Duration</h1>
          <p>Get the duration of a youtube playlist!</p>
          <form>
            <input 
              type="text"
              id ="url"
              onChange= {handleChange}
              placeholder="Paste Playlist URL, Playlist ID or Playlist Video URL" />
            <input
              type='submit'
              className="submit"
              onClick= {handleClick}
              value= 'Get the Duration'
            />  
          </form>
        </div>
    </section>
  )
}
