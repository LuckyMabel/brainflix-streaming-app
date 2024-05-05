import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

const CommentSection = ({ commentsList }) => (
  <section className="comment-section">
    <form className="comment-form">
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
          />
          <Button iconSrc={addCommentIcon} text="Comment" />
        </div>
      </div>
    </form>
    {commentsList.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
  </section>
);

export default CommentSection;
