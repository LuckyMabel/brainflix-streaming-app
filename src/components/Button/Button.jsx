import "./Button.scss";

function Button({ iconSrc, text }) {
  return (
    <div className="submit">
      <img className="submit__icon" src={iconSrc} alt={text + " Icon"} />
      <button className="submit__button">{text}</button>
    </div>
  );
}

export default Button;
