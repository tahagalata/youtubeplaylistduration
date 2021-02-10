import React from 'react'
import './durationContainer.scss'
import Duration from './duration/duration'

export default function DurationContainer({videos}) {
  const totalDuration = videos.reduce((acc, curr) => acc + curr.duration, 0)

  return (
    <>
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
    </>    
  )
}
