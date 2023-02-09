import './core/components/css/global.css';
import "@fontsource/poppins";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Content, HeaderAdmin, NavAdmin } from "./views/layout/admin/AdminLayout";
import './core/components/css/LayoutResponsive.css';
import Tournament from './views/admin/Tournament';
import RulerAdmin from './views/admin/Ruler';
import RouterAdmin from './core/navs/Admin/RouterAdmin';

function App() {
  return (
    <div className="">
      <RouterAdmin />
      
    </div>
  );
}

export default App;
