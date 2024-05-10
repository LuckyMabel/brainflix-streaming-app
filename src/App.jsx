import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Upload from "./pages/Upload/Upload.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="video/:videoId" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
