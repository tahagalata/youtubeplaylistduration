import React, { useState } from 'react'
import './video.scss'

export default function Video({title, channelTitle, thumbnailUrl}) {
  const [excluded, toggleExcluded] = useState(false)

  const handleClick = (event) => {
    console.log(event.target)
    toggleExcluded(!excluded)
  }

  return (
    <div 
      className="video"
      style= {{
        opacity: excluded ? '0.4' : '1'
      }}
      onClick= {handleClick}
    >
      <div 
        className="video-thumb"
        style= {{
          filter: excluded ? 'grayscale(100)' : '',
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