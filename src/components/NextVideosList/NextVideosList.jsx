import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";
import { useState, useEffect } from "react";
import axios from "axios";

function NextVideosList({ activeVideoId }) {
  const [videos, setVideos] = useState([]);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";
  const apiKey = "d384cc61-a4cb-4d06-8613-981d4f20b68a";

  const fetchVideos = async () => {
    try {
      const videosApiURL = `${apiURL}?api_key=${apiKey}`;
      const response = await axios.get(videosApiURL);
      const videos = response.data;
      const filteredVideos = videos.filter(
        (video) => video.id !== activeVideoId
      );
      setVideos(filteredVideos);
      setErrorOccurred(false);
    } catch (error) {
      setErrorOccurred(true);
    }
  };

  useEffect(() => {
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
