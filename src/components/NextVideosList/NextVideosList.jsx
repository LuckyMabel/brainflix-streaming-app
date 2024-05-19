import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function NextVideosList({ activeVideoId }) {
  const [videos, setVideos] = useState([]);
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    const videosApiURL = `${BASE_URL}/videos`;

    const fetchVideos = async () => {
      try {
        const response = await axios.get(videosApiURL);
        const videos = response.data;
        const filteredVideos = videos.filter(
          (video) => video.id !== activeVideoId
        );
        setVideos(filteredVideos);
        setErrorOccurred(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setErrorOccurred(true);
      }
    };

    fetchVideos();
  }, [activeVideoId]);

  if (errorOccurred) {
    return <p>Unable to fetch videos at the moment. Please try again later.</p>;
  }

  if (videos.length === 0) {
    return <p>No videos available.</p>;
  }

  return (
    <section className="next-videos-list">
      <h3 className="next-videos-list__title">NEXT VIDEOS</h3>
      <ul className="next-videos-list__body">
        {videos.map((video) => (
          <NextVideo key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
}

export default NextVideosList;
