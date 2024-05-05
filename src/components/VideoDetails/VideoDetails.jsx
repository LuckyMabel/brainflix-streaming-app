import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function VideoDetails({ videoInfo }) {
  const { title, channel, timestamp, views, likes, description, comments } =
    videoInfo;

  function formattedDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return month + "/" + day + "/" + year;
  }

  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>

      <div className="video-details__info">
        <div className="video-details__info-container">
          <div className="video-details__channel">By {channel}</div>
          <div className="video-details__date">{formattedDate(timestamp)}</div>
        </div>

        <div className="video-details__info-container">
          <div className="video-details__views">
            <img
              className="video-details__icon"
              src={viewsIcon}
              alt="Views Icon"
            />
            {views}
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__icon"
              src={likesIcon}
              alt="Likes Icon"
            />
            {likes}
          </div>
        </div>
      </div>

      <div className="video-details__description">{description}</div>

      {/* Comments */}
    </section>
  );
}

export default VideoDetails;
