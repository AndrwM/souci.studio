import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import OverlayModal from "../components/OverlayModal";

const Layout = () => (<>
  <div style={{position: 'fixed', bottom: 20, right: 20, zIndex: 3000}}>
    <ThemeToggle />
  </div>
  <OverlayModal />
  <Outlet />
</>);

export default Layout;
