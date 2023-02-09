import { BrowserRouter, Route, Routes } from "react-router-dom";
import Match from "../../../views/admin/Match";
import RulerAdmin from "../../../views/admin/Ruler";
import Tournament from "../../../views/admin/Tournament";
import {useLayoutEffect} from 'react'
function RouterAdmin(props) {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/Admin" element={<Tournament />} />
            <Route path="/Admin/Match" element={<Match />} />
            <Route path="/Admin/Ruler" element={<RulerAdmin />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default RouterAdmin;
