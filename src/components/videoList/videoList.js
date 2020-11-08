import React from 'react'
import './videoList.scss'
import Video from './video/video'

export default function VideoList({videos}) {
  const videosArray = videos.map(({title, channelTitle, thumbnailUrl}) => (
    <Video
      key= {title}
      title = {title}
      channelTitle= {channelTitle}
      thumbnailUrl={thumbnailUrl}
    />
  ))

  return (
    <section className="section video-list-section">
      <div className="container">
        <p id="video-list-paragraph">
          Click on videos to exclude / include
        </p>
        <div id='video-list'>
          {videosArray}
        </div>
      </div>
    </section>
  )
}
