import { BrowserRouter, Route, Routes } from "react-router-dom";
import Match from "../../../views/admin/Match";
import RulerAdmin from "../../../views/admin/Ruler";
import Tournament from "../../../views/admin/Tournament";
import { HeaderAdmin, NavAdmin } from "../../../views/layout/admin/AdminLayout";

function RouterAdmin() {
  return (
    <>
      <BrowserRouter>
        <div className="row">
          <NavAdmin />
          <div className="col-xl-9 col-md-9 tournament">
            <HeaderAdmin />
            <Routes>
              <Route path="/" element={<Tournament />} />
              <Route path="/Match" element={<Match />} />
              <Route path="/Ruler" element={<RulerAdmin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default RouterAdmin;
