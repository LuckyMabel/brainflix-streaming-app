import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";

function formattedDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return month + "/" + day + "/" + year;
}

function CommentItem({ comment }) {
  return (
    <article className="comment" id={comment.id}>
      <Avatar avatarSrc={undefined} />
      <div className="comment__info">
        <div className="comment__header">
          <h3 className="comment__name">{comment.name}</h3>
          <div className="comment__date">
            {formattedDate(comment.timestamp)}
          </div>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </article>
  );
}

export default CommentItem;
