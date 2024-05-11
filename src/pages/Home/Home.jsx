import "./Home.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import Error from "../../components/Error/Error";
import axios from "axios";

function VideoPage() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false);

  const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
  const apiKey = "d384cc61-a4cb-4d06-8613-981d4f20b68a";

  const fetchVideoDetails = async (id) => {
    try {
      const videoDetailsURL = `${apiURL}/${id}?api_key=${apiKey}`;
      const response = await axios.get(videoDetailsURL);
      setCurrentVideo(response.data);
      setErrorOccurred(false);
    } catch (error) {
      setErrorOccurred(true);
    }
  };

  const fetchDefaultVideo = async () => {
    try {
      const videoListURL = `${apiURL}?api_key=${apiKey}`;
      const response = await axios.get(videoListURL);
      fetchVideoDetails(response.data[0].id);
    } catch (error) {
      setErrorOccurred(true);
    }
  };

  useEffect(() => {
    if (videoId !== undefined) {
      fetchVideoDetails(videoId);
    } else {
      fetchDefaultVideo();
    }
  }, [videoId]);

  return (
    <main className="video-page">
      <VideoPlayer videoSrc={currentVideo.video} image={currentVideo.image} />
      <div className="video-page__details">
        <VideoDetails videoInfo={currentVideo} />
        <NextVideosList activeVideoId={currentVideo.id} />
      </div>
      {errorOccurred && <Error />}
    </main>
  );
}

export default VideoPage;
