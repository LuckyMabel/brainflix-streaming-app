import "./VideoPlayer.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function VideoPlayer({ videoSrc, image }) {
  return (
    <section className="video-player">
      <video controls poster={`${BASE_URL}/${image}`}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoPlayer;
