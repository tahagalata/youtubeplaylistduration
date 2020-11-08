import React from 'react'
import './video.scss'

export default function Video({title, channelTitle, thumbnailUrl}) {
  return (
    <div className="video">
      <div 
        className="video-thumb"
        style={{
          backgroundImage: `url(${thumbnailUrl})`
        }}
      >
      </div>
      <div>
      <p className="video-title">{title}</p>
      <p className="video-channel">{channelTitle}</p>
      </div>
    </div>
  )
}