import "./Home.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import Error from "../../components/Error/Error";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function VideoPage() {
  useEffect(() => {
    document.title = "Brainflix - Home";
  }, []);

  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState({});
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchVideo = async (id) => {
      try {
        const response = await axios.get(`${BASE_URL}/videos/${id}`);
        setCurrentVideo(response.data);
        setErrorOccurred(false);
        window.scrollTo(0, 0);
      } catch (error) {
        setErrorOccurred(true);
      }
    };

    const fetchDefaultVideo = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/videos`);
        fetchVideo(response.data[0].id);
      } catch (error) {
        setErrorOccurred(true);
      }
    };

    if (videoId) {
      fetchVideo(videoId);
    } else {
      fetchDefaultVideo();
    }
  }, [videoId, refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <main className="video-page">
      <VideoPlayer videoSrc={currentVideo.video} image={currentVideo.image} />
      <div className="video-page__details">
        <VideoDetails videoInfo={currentVideo} handleRefresh={handleRefresh} />
        <NextVideosList activeVideoId={currentVideo.id} />
      </div>
      {errorOccurred && <Error />}
    </main>
  );
}

export default VideoPage;
