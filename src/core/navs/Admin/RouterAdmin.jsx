import { BrowserRouter, Route, Routes } from "react-router-dom";
import Match from "../../../views/admin/Match";
import RulerAdmin from "../../../views/admin/Ruler";
import Tournament from "../../../views/admin/Tournament";
import {useLayoutEffect} from 'react'
import Birds from "../../../views/admin/Birds";
import Users from "../../../views/admin/Users";
import Brackets from "../../../views/admin/Brackets";
import Overview from "../../../views/admin/Overview";
import BirdDetail from "../../../views/admin/BirdDetail";
import CreateTour from "../../../views/admin/CreateTour";
import UserDetail from "../../../views/admin/UserDetail";
import MatchDetail from "../../../views/admin/MatchDetail";
function RouterAdmin(props) {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/Admin" element={<Tournament />} />
            <Route path="/Admin/Match" element={<Match />} />
            <Route path="/Admin/Ruler" element={<RulerAdmin />}/>
            <Route path="/Admin/Birds" element={<Birds />}/>
            <Route path="/Admin/Users" element={<Users />}/>
            <Route path="/Admin/Brackets" element={<Brackets />}/>
            <Route path="/Admin/Overview" element={<Overview />}/>
            <Route path="/Admin/BirdDetail" element={<BirdDetail />}/>
            <Route path="/Admin/CreateTour" element={<CreateTour />}/>
            <Route path="/Admin/UserDetail" element={<UserDetail />}/>
            <Route path="/Admin/MatchDetail" element={<MatchDetail />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default RouterAdmin;
