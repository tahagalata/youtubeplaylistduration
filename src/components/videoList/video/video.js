import React from 'react'
import './video.scss'
import {secondsToShortString} from '../../../utilities/durationFunc'

export default function Video({index, excluded, title, channelTitle, thumbnailUrl, handleExclude, duration}) {

  const durationText = secondsToShortString(duration)

  return (
    <div 
      className="video"
      style= {{
        opacity: excluded ? '0.4' : '1'
      }}
      onClick= {()=> handleExclude(index)}
    >
      <div 
        className="video-thumb"
        style= {{
          filter: excluded ? 'grayscale(100)' : '',
          backgroundImage: `url(${thumbnailUrl})`
        }}
      >
        <p className='video-duration'>{durationText}</p>
      </div>
      <div>
      <p className="video-title">{title}</p>
      <p className="video-channel">{channelTitle}</p>
      </div>
    </div>
  )
}