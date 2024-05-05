import "./NextVideo.scss";

function NextVideo({ video, updateActiveVideo }) {
  const handleClick = () => {
    updateActiveVideo(video.id);
  };

  return (
    <li className="next-video" onClick={handleClick}>
      <img className="next-video__image" src={video.image} alt={video.name} />
      <div className="next-video__info">
        <div className="next-video__title">{video.title}</div>
        <div className="next-video__channel">{video.channel}</div>
      </div>
    </li>
  );
}

export default NextVideo;
