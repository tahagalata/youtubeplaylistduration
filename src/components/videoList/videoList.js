import React from 'react'
import './videoList.scss'
import Video from './video/video'

export default function VideoList({videos, handleExclude}) {
  const videosArray = videos.map(({index, excluded, title, channelTitle, thumbnailUrl}) => (
    <Video
      key= {index}
      index = {index}
      excluded = {excluded}
      title = {title}
      channelTitle= {channelTitle}
      thumbnailUrl={thumbnailUrl}
      handleExclude = {handleExclude}
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
