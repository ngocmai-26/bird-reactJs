import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../../views/client/Home'
const ClientRouter = (props)=>{
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
      </BrowserRouter>
    )
}

export default ClientRouter