import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideosList({ videos, updateActiveVideo }) {
  return (
    <section className="next-videos-list">
      <h3 className="next-videos-list__title">NEXT VIDEOS</h3>
      <ul className="next-videos-list__body">
        {videos.map((video) => {
          return (
            <NextVideo
              key={video.id}
              video={video}
              updateActiveVideo={updateActiveVideo}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default NextVideosList;
