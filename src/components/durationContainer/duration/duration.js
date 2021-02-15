import React from 'react'
import './duration.scss'
import {secondsToLongString} from '../../../utilities/durationFunc'

export default function Duration({speed, totalDuration}) {
  let speedyDuration = Math.round(totalDuration / speed)

  let text = secondsToLongString(speedyDuration)

  return (
    <div className='duration'>
      <p className='red duration-title'>Total Duration at speed x{speed} :</p>
      <p className='duration-text'>{text}</p>
    </div>

  )
}
