import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element={<Home />} />

        <Route exact path="/template/fill-details"
        element={
          <CheckSelectedId>
            <DetailFilling />
          </CheckSelectedId>
        } />

        <Route exact path="/about-us" element={<AboutUs />} />

        <Route exact path="/my/resumes" element={<MyResumes />} />
      </Routes>
    </HashRouter>
  );
};

export default App;