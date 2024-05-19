import "./Upload.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import previewSrc from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function VideoUpload() {
  useEffect(() => {
    document.title = "Brainflix - Upload";
  }, []);

  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnTitleChange = (event) => {
    setFormErrors(formErrors.filter((item) => item !== "title"));
    setTitle(event.target.value);
  };

  const handleOnDescriptionChange = (event) => {
    setFormErrors(formErrors.filter((item) => item !== "description"));
    setDescription(event.target.value);
  };

  const handleOnCancel = () => {
    navigate("/");
  };

  const handleOnUploadVideo = async () => {
    try {
      await axios.post(BASE_URL + `/videos/`, {
        title: title,
        description: description,
        image: "images/Upload-video-preview.jpg",
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch {
      setFormErrors(["API Error"]);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const errors = [];

    if (title.trim() === "") {
      errors.push("title");
    }

    if (description.trim() === "") {
      errors.push("description");
    }

    if (errors.length === 0) {
      handleOnUploadVideo();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleOnSubmit}>
        <div className="upload__form-main">
          <div className="upload__thumbnail">
            <div className="upload__thumbnail-title">VIDEO THUMBNAIL</div>
            <img
              className="upload__thumbnail-image"
              src={previewSrc}
              alt="Track runner at starting line"
            />
          </div>
          <div className="upload__input-container">
            <label htmlFor="title" className="upload__input-label">
              TITLE YOUR VIDEO
            </label>
            <input
              onChange={handleOnTitleChange}
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              className={`upload__input-title ${
                formErrors.includes("title") ? "upload__input-title--error" : ""
              }`}
            />
            <label htmlFor="description" className="upload__input-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              onChange={handleOnDescriptionChange}
              id="description"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              className={`upload__input-description ${
                formErrors.includes("description")
                  ? "upload__input-description--error"
                  : ""
              }`}
            />
          </div>
        </div>
        <div className="upload__button">
          <button
            className="upload__cancel"
            disabled={submitSuccess}
            onClick={handleOnCancel}
            type="button"
          >
            CANCEL
          </button>
          <Button iconSrc={publishIcon} text="Publish" />
        </div>
      </form>
      {formErrors.length > 0 && (
        <div className="upload__error">
          <p>Please enter all fields.</p>
        </div>
      )}
      {formErrors.includes("API Error") && (
        <div className="upload__error">
          <p>Something went wrong on the API server.</p>
        </div>
      )}
      {submitSuccess && (
        <div className="upload__success">
          <p>Upload success!</p>
        </div>
      )}
    </section>
  );
}

export default VideoUpload;
