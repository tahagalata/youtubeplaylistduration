import React from 'react'
import VideoList from '../videoList/videoList'
import DurationContainer from '../durationContainer/durationContainer'

export default function BottomSection({videos, handleExclude}) {
  return (
    <section>
      <VideoList videos={videos} handleExclude={handleExclude}/>
      <DurationContainer videos={videos}/>
    </section>
  )
}
