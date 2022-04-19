import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import OverlayModal from "../components/OverlayModal";

const Layout = () => (<>
  {ReactDOM.createPortal(
    <div className='c-overlay-hud'>
      <div className='c-overlay-hud__col-primary'>
        <OverlayModal />
      </div>
      <div className='c-overlay-hud__col'>
        <ThemeToggle />
      </div>
    </div>,
    document.body
  )}
  <Outlet />
</>);

export default Layout;
