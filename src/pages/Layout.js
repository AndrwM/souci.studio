import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import OverlayModal from "../components/OverlayModal";

const Layout = () => (<>
  {ReactDOM.createPortal(
    <div className='c-overlay-hud'>
      <div className='c-overlay-hud__col-primary'>
        <OverlayModal tabIndex={1} />
      </div>
      <div className='c-overlay-hud__col'>
        <ThemeToggle tabIndex={1} />
      </div>
    </div>,
    document.body
  )}
  <Outlet />
</>);

export default Layout;
