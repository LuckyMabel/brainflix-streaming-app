import "./CommentItem.scss";
import { useState } from "react";
import axios from "axios";
import Avatar from "../Avatar/Avatar";
import FormattedDate from "../FormattedDate/FormattedDate";
import deleteIcon from "../../assets/icons/icon-delete.svg";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function CommentItem({ comment, activeVideoId, handleRefresh }) {
  const [error, setError] = useState(false);

  const handleDeleteComment = async () => {
    try {
      await axios.delete(
        `${BASE_URL}/videos/${activeVideoId}/comments/${comment.id}`
      );
      handleRefresh();
    } catch {
      setError(true);
    }
  };

  return (
    <article className="comment" id={comment.id}>
      <Avatar avatarSrc={undefined} />
      <div className="comment__info">
        <div className="comment__header">
          <h3 className="comment__name">{comment.name}</h3>
          <div className="comment__date">
            <FormattedDate timestamp={comment.timestamp} />
          </div>
        </div>
        <p className="comment__text">{comment.comment}</p>
        <div className="comment__button-container">
          <button className="comment__button" onClick={handleDeleteComment}>
            <img src={deleteIcon} alt="Delete Icon" />
          </button>
        </div>
        {error && (
          <div className="comment__error">
            <p>Sorry, something went wrong. Please try again later.</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default CommentItem;
