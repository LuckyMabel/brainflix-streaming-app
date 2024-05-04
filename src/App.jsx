import { useState } from "react";
import "./App.scss";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import NextVideosList from "./components/NextVideosList/NextVideosList.jsx";

function App() {
  const [activeVideo, setActiveVideo] = useState(videoDetails[0]);

  function updateActiveVideo(clickedId) {
    const newActiveVideo = videoDetails.find((video) => video.id === clickedId);
    setActiveVideo(newActiveVideo);
  }

  const filteredVideosList = videos.filter(
    (video) => video.id !== activeVideo.id
  );

  return (
    <>
      <div className="app">
        <Header />
        <VideoPlayer videoSrc={activeVideo.video} image={activeVideo.image} />
        <main className="app__main">
          <VideoDetails videoInfo={activeVideo} />
          <NextVideosList
            videos={filteredVideosList}
            updateActiveVideo={updateActiveVideo}
          />
        </main>
      </div>
    </>
  );
}

export default App;
