import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./assets/stylesheets/main.scss";

import Layout from "./pages/Layout";
import Intro from "./pages/Intro";
import Wayback from "./pages/Wayback";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Intro />} />
        <Route path="/wayback-machine" element={<Wayback />} />
      </Route>
    </Routes>
  </HashRouter>
);


export default App;
