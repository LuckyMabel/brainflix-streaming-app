import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ video }) {
  return (
    <li className="next-video">
      <Link className="next-video__link" to={`/video/${video.id}`}>
        <img className="next-video__image" src={video.image} alt={video.name} />
        <div className="next-video__info">
          <div className="next-video__title">{video.title}</div>
          <div className="next-video__channel">{video.channel}</div>
        </div>
      </Link>
    </li>
  );
}

export default NextVideo;
