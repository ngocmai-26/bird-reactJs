import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountInfo from "../../../views/user/AccountInfo";

function UserRouter() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/AccountInfo" element={<AccountInfo />} />
          </Routes>
      </BrowserRouter>
     );
}

export default UserRouter;