import "./NextVideosList.scss";

function NextVideosList({ videos, updateActiveVideo }) {
  return (
    <section className="next-videos-list">
      <h3 className="next-videos-list__title">NEXT VIDEOS</h3>
      <ul className="next-videos-list__body"></ul>
    </section>
  );
}

export default NextVideosList;
