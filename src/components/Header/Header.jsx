import "./Header.scss";
import logoImage from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="./">
        <img
          className="header__logo-image"
          src={logoImage}
          alt="Brainflix Logo"
        />
      </a>
      <nav className="header__navbar">
        <div className="header__search">
          <img
            className="header__search-icon"
            src={searchIcon}
            alt="Search Icon"
          />
          <input className="header__search-input" placeholder="Search" />
        </div>

        <div className="header__avatar">
          <Avatar avatarSrc={userAvatar} />
        </div>

        <div className="header__button">
          <Button iconSrc={uploadIcon} text="Upload" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
