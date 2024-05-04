import "./VideoDetails.scss";
import viewicone from "../../assets/icons/views.svg";
import likeicone from "../../assets/icons/likes.svg";

function VideoDetails({ videoInfo }) {
  const { title, channel, timestamp, views, likes, description, comments } =
    videoInfo;

  function formattedDate(timestamp) {
    let date = new Date(timestamp);
    console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${month}/${day}/${year}`;
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
              src={viewicone}
              alt="Views Icon"
            />
            {views}
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__icon"
              src={likeicone}
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
