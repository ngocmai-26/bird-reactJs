import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../../views/client/Home'
import Login from '../../../views/client/Login'
import Register from '../../../views/client/Register'
const ClientRouter = (props)=>{
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Client/Login" element={<Login />} />
              <Route path="/Client/Register" element={<Register />} />
            </Routes>
      </BrowserRouter>
    )
}

export default ClientRouter