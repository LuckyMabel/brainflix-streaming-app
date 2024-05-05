import "./NextVideo.scss";

function NextVideoItem({ video, updateActiveVideo }) {
  let className = "next-video";
  const handleClick = () => {
    updateActiveVideo(video.id);
  };

  return (
    <li onClick={handleClick} className={className}>
      <img className="next-video__image" src={video.image} alt={video.name} />
      <div className="next-video__info">
        <div className="next-video__title">{video.title}</div>
        <div className="next-video__channel">{video.channel}</div>
      </div>
    </li>
  );
}

export default NextVideoItem;
