import React, {useState} from 'react'
import './App.scss';
import Header from './components/header/header'
import UrlInput from './components/urlInput/urlInput'
import VideoList from './components/videoList/videoList'

function App() {
  const [videos, setVideos] = useState("none")

  return (
    <>
    <Header />
    <UrlInput setVideos= {setVideos}/>
    {videos !== "none" && 
    <VideoList videos={videos}/>}
    </>
  );
}

export default App;
