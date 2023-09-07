import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./assets/stylesheets/main.scss";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
// import Intro from "./pages/Intro";
// import Colophon from "./pages/Colophon";
// import Wayback from "./pages/Wayback";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route index element={<Intro />} />
        <Route path="/colophon" element={<Colophon />} />
        <Route path="/wayback-machine" element={<Wayback />} /> */}
      </Route>
    </Routes>
  </HashRouter>
);


export default App;
