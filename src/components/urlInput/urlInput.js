import React from 'react'
import './urlInput.scss'

export default function UrlInput() {
  return (
    <section className="section urlSection">
        <div className="container">
          <h1><span className="red">Youtube</span> Playlist Duration</h1>
          <p>Get the duration of a youtube playlist!</p>
          <form>
            <input 
              type="text"
              id ="url"
              placeholder="Paste Playlist URL, Playlist ID or Playlist Video URL" />
            <button
              className="submit"
            >
              Get the Duration
            </button>      
          </form>
        </div>
    </section>
  )
}
