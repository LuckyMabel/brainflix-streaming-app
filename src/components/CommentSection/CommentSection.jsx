import React, { useState } from "react";
import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const CommentSection = ({ commentsList, activeVideoId, handleRefresh }) => {
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState([]);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
    setErrors([]);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!commentText.trim()) {
      setErrors(["comment"]);
    } else {
      try {
        await axios.post(`${BASE_URL}/videos/${activeVideoId}/comments`, {
          name: "Anonymous",
          comment: commentText,
        });
        handleRefresh();
      } catch {
        setErrors(["API Error"]);
      }
    }
  };

  return (
    <section className="comment-section">
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <div className="comment-form__avatar">
          <Avatar avatarSrc={userAvatar} />
        </div>
        <div className="comment-form__body">
          <div className="comment-form__title">JOIN THE CONVERSATION</div>
          <div className="comment-form__input">
            <textarea
              id="comment-text"
              name="text"
              placeholder="Add a new comment"
              className="comment-form__textarea"
              value={commentText}
              onChange={handleCommentChange}
            />
            <Button iconSrc={addCommentIcon} text="Comment" type="submit" />
          </div>
          {errors.length > 0 && (
            <div className="comment-form__error">
              <p>Please enter all fields.</p>
            </div>
          )}
          {errors.includes("API Error") && (
            <div className="comment-form__error">
              <p>Something went wrong on the API server.</p>
            </div>
          )}
        </div>
      </form>
      {commentsList != undefined &&
        commentsList.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              comment={comment}
              handleRefresh={handleRefresh}
              activeVideoId={activeVideoId}
            />
          );
        })}
    </section>
  );
};

export default CommentSection;
