import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import CreateAccount from './pages/CreateAccount';
import Createpage from './pages/Createpage';

const App = ()=>{
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgottenpassword" element={<ForgetPassword/>}></Route>
            <Route path="/createaccount" element={<CreateAccount/>}></Route>
            <Route path='/createpage' element={<Createpage/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;