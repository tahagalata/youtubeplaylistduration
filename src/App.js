import React, {useState} from 'react'
import './App.scss';
import Header from './components/header/header'
import UrlInput from './components/urlInput/urlInput'
import addIndexAndExcluded from './utilities/videosArrayFunc'
import BottomSection from './components/bottomSection/bottomSection'

function App() {
  const [videos, setVideos] = useState(false)
  
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
    {videos !== false && 
      <BottomSection 
        videos={videos}
        handleExclude= {handleExclude} 
      />
    }
    </>
  );
}

export default App;
