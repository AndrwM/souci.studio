import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Layout = () => (<>
  <div style={{position: 'fixed', bottom: 20, right: 20, zIndex: 999}}>
    <ThemeToggle />
  </div>
  <Outlet />
</>);

export default Layout;
