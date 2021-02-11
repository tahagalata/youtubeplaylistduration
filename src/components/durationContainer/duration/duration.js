import React from 'react'
import './duration.scss'

export default function Duration({speed, totalDuration}) {
  let speedyDuration = Math.round(totalDuration / speed)
  let days = 0, hours = 0, minutes = 0, seconds = 0

  days = Math.floor(speedyDuration / 86400)
  let remainingAfterDays = speedyDuration % 84600
  hours = Math.floor(remainingAfterDays / 3600)
  let remainingAfterHours = remainingAfterDays % 3600
  minutes = Math.floor(remainingAfterHours / 60)
  seconds = remainingAfterHours % 60

  let text = (days && `${days} Days, ` ) + (hours && `${hours} Hours, `) + (minutes && `${minutes} Minutes, `) + (seconds ? `${seconds} Seconds` : '0 Seconds')

  return (
    <div>
      <p className='red'>Total Duration at speed x{speed} :</p>
      <p>{text}</p>
    </div>

  )
}
