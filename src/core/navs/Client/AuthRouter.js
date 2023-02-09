import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../../../views/client/Login';
import Register from '../../../views/client/Register';
const AuthRouter = (props)=>{
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
      </BrowserRouter>
    )
}

export default AuthRouter;