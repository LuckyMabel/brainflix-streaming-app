import React, { useState } from "react";
import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

const CommentSection = ({ commentsList }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log("Comment submitted:", commentText);
    setCommentText("");
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
              onChange={(event) => setCommentText(event.target.value)}
            />
            <Button iconSrc={addCommentIcon} text="Comment" type="submit" />
          </div>
        </div>
      </form>
      {commentsList != undefined &&
        commentsList.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
    </section>
  );
};

export default CommentSection;
