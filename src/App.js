import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./assets/stylesheets/main.scss";

import Layout from "./pages/Layout";
import ComingSoon from "./pages/ComingSoon";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ComingSoon />} />
        {/* <Route index element={<Intro />} /> */}
        {/* <Route path="/colophon" element={<Colophon />} /> */}
        {/* <Route path="/wayback-machine" element={<Wayback />} /> */}
      </Route>
    </Routes>
  </HashRouter>
);


export default App;
