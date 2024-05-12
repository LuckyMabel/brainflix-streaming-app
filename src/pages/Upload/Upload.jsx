import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import previewSrc from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import Success from "../../components/Success/Success";

function VideoUpload() {
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(errors.filter((item) => item !== name));
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = [];

    if (formData.title.trim() === "") {
      newErrors.push("title");
    }

    if (formData.description.trim() === "") {
      newErrors.push("description");
    }

    if (newErrors.length === 0) {
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
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
            <label htmlFor="title">TITLE YOUR VIDEO</label>
            <input
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              value={formData.title}
              className={`upload__input-title ${
                errors.includes("title") ? "upload__input-title--error" : ""
              }`}
            />
            <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
            <textarea
              onChange={handleChange}
              id="description"
              name="description"
              placeholder="Add a description to your video"
              value={formData.description}
              className={`upload__input-description ${
                errors.includes("description")
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
            onClick={handleCancel}
            type="button"
          >
            CANCEL
          </button>
          <Button iconSrc={publishIcon} text="Publish" />
        </div>
      </form>
      {errors.length > 0 && (
        <div className="upload__error">
          <p>Please fill in all the fields.</p>
        </div>
      )}
      {submitSuccess && <Success />}
    </section>
  );
}

export default VideoUpload;
