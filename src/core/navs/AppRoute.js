import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../views/client/Home'
import Login from '../../views/client/Login'
import Register from '../../views/client/Register'
import Tournament from '../../views/admin/Tournament'
import Match from '../../views/admin/Match'
import RulerAdmin from '../../views/admin/Ruler'
import BirdDetail from '../../views/admin/BirdDetail'
import Birds from '../../views/admin/Birds'
import Users from '../../views/admin/Users'
import Brackets from '../../views/admin/Brackets'
import Overview from '../../views/admin/Overview'
import MatchDetail from '../../views/admin/MatchDetail'
import CreateTour from '../../views/admin/CreateTour'
import UserDetail from '../../views/admin/UserDetail'
import Setting from '../../views/admin/Setting'
import AccountInfo from '../../views/user/AccountInfo'
import BirdList from '../../views/user/BirdList'
import BirdRegister from '../../views/user/BirdRegister'
import ListTournament from '../../views/user/ListTournaments'
import History from '../../views/user/History'
import TournamentList_Dang from '../../views/client/TournamentList_Dang'
import TournamentList_Da from '../../views/client/TournamentList_Da'
import TournamentList_Sap from '../../views/client/TournamentList_Sap'
import Rule from '../../views/client/Rule'
import ResetPass from '../../views/client/ResetPass'
import Feedback from '../../views/client/Feedback'
const ClientRouter = (props)=>{
   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ResetPass" element={<ResetPass />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/TournamentList_Dang" element={<TournamentList_Dang />} />
                <Route path="/TournamentList_Da" element={<TournamentList_Da />} />
                <Route path="/TournamentList_Sap" element={<TournamentList_Sap />} />
                <Route path="/Rule" element={<Rule />} />
              

                <Route path="/AccountInfo" element={<AccountInfo />} />
                <Route path="/BirdList" element={<BirdList />} />
                <Route path="/BirdRegister" element={<BirdRegister />} />
                <Route path="/ListTournament" element={<ListTournament />} />
                <Route path="/History" element={<History />} />

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
                <Route path="/Admin/Settings" element={<Setting />}/>
                
            </Routes>
      </BrowserRouter>
    )
}

export default ClientRouter