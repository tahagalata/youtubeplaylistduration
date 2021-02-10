import React, {useState} from 'react'
import './App.scss';
import Header from './components/header/header'
import UrlInput from './components/urlInput/urlInput'
import VideoList from './components/videoList/videoList'
import addIndexAndExcluded from './utilities/videosArrayFunc'
import DurationContainer from './components/durationContainer/durationContainer'

function App() {
  const [videos, setVideos] = useState("none")
  
  const handleVideos = (videoArray) => {
    const newList= addIndexAndExcluded(videoArray)
    setVideos(newList)
  }

  const handleExclude = (vidIndex) => {
    const initExcluded = videos[vidIndex].excluded
    const videoObj = Object.assign(videos[vidIndex], {excluded: !initExcluded})

    const tempVidArray = [...videos]
    tempVidArray[vidIndex] = videoObj

    setVideos(tempVidArray)
  }

  return (
    <>
    <Header />
    <UrlInput setVideos= {handleVideos}/>
    {videos !== "none" && 
    <VideoList videos={videos} handleExclude={handleExclude}/>}
    {videos !== "none" && <DurationContainer videos={videos}/>}
    </>
  );
}

export default App;
