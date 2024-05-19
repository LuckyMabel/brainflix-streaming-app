import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import CommentSection from "../CommentSection/CommentSection";
import FormattedDate from "../FormattedDate/FormattedDate";

function VideoDetails({ videoInfo, handleRefresh }) {
  const { title, channel, timestamp, views, likes, description, comments } =
    videoInfo;

  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>

      <div className="video-details__info">
        <div className="video-details__info-container">
          <div className="video-details__channel">By {channel}</div>
          <div className="video-details__date">
            <FormattedDate timestamp={timestamp} />
          </div>
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

      <div className="video-details__comment-num">
        {comments ? comments.length : 0} Comments
      </div>
      <CommentSection
        commentsList={comments}
        activeVideoId={videoInfo.id}
        handleRefresh={handleRefresh}
      />
    </section>
  );
}

export default VideoDetails;
