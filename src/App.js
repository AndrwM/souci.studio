import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./assets/stylesheets/main.scss";

import Layout from "./pages/Layout";
import Intro from "./pages/Intro";
import Work from "./pages/Work";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Intro />} />
        <Route path="work" element={<Work />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


export default App;
