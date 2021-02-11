import React from 'react'
import './bottomSection.scss'
import VideoList from '../videoList/videoList'
import DurationContainer from '../durationContainer/durationContainer'

export default function BottomSection({videos, handleExclude}) {
  return (
    <section className='section bottom'>
      <div className='container flex'>
        <VideoList
          videos={videos}
          handleExclude={handleExclude}
        />
        <DurationContainer
          videos={videos}
        />
      </div>
    </section>
  )
}
