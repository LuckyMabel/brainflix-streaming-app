import "./Avatar.scss";

function Avatar({ avatarSrc }) {
  return (
    <div className="avatar">
      <img className="avatar__image" src={avatarSrc} alt="User Avatar" />
    </div>
  );
}

export default Avatar;
