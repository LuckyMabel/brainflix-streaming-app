import { useState } from "react";
import "./App.scss";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
    </>
  );
}

export default App;
