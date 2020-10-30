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
              placeholder="Playlist Url" />
            <button
              className="submit"
            >
              Get the Duration
            </button>
            <div className="select-div">
              <select id="start">
                <option value="">
                  Start
                </option>
              </select>
              <select id ="finish">
                <option value="">
                  Finish
                </option>
              </select>
            </div>            
          </form>
        </div>
    </section>
  )
}
