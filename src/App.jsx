import { useState } from "react";
import "./App.scss";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";

function App() {
  const [activeVideo, setActiveVideo] = useState(videoDetails[0]);

  return (
    <>
      <div className="app">
        <Header />
        <VideoPlayer videoSrc={activeVideo.video} image={activeVideo.image} />
        <VideoDetails videoInfo={activeVideo} />
      </div>
    </>
  );
}

export default App;
