import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import OverlayModal from '../components/OverlayModal';
import ThemeToggle from '../components/ThemeToggle';
import HighlightModeToggle from "../components/HighlightModeToggle";

const Layout = () => (<>
  {ReactDOM.createPortal(
    <div className='c-overlay-hud'>
      <div className='c-overlay-hud__col-primary'>
        <OverlayModal tabIndex={1} />
      </div>
      <div className='c-overlay-hud__col'>
        <HighlightModeToggle tabIndex={2} />
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
