import React from 'react'
import './durationContainer.scss'
import Duration from './duration/duration'

export default function DurationContainer({videos}) {
  
  let totalDuration = videos.reduce((acc, curr) => acc + (curr.excluded ? 0 : curr.duration), 0)

  return (
    <div className='duration-container'>
      <Duration 
        speed = '1'
        totalDuration = {totalDuration}
      />

      <Duration 
        speed = '1.25'
        totalDuration = {totalDuration}
      />

      <Duration 
        speed = '1.50'
        totalDuration = {totalDuration}
      />

      <Duration 
        speed = '1.75'
        totalDuration = {totalDuration}
      />

      <Duration 
        speed = '2'
        totalDuration = {totalDuration}
      />
    </div>    
  )
}
