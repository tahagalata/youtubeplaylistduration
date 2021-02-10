import React, { useState } from 'react'
import './video.scss'

export default function Video({title, channelTitle, thumbnailUrl}) {
  const [disabled, toggleDisabled] = useState(false)

  const handleClick = (event) => {
    toggleDisabled(!disabled)
  }

  return (
    <div 
      className="video"
      style= {{
        opacity: disabled ? '0.4' : '1'
      }}
      onClick= {handleClick}
    >
      <div 
        className="video-thumb"
        style= {{
          filter: disabled ? 'grayscale(100)' : '',
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