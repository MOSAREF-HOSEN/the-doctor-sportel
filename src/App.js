import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Apponment from './pages/Apponment/Apponment';
import SignUp from './pages/Login/SignUp';
import RequareAuth from './pages/Login/RequareAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './pages/Apponment/Dashbord/Dashbord';
import MyApponment from './pages/Apponment/Dashbord/MyApponment';
import MyReview from './pages/Apponment/Dashbord/MyReview';
import Historoy from './pages/Apponment/Dashbord/Historoy';


function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <About></About>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/appointment' element={
          <RequareAuth>
            <Apponment></Apponment>
          </RequareAuth>}></Route>

        <Route path='/dashbord' element={
          <RequareAuth>
            <Dashbord />
          </RequareAuth>}>
          <Route index element={<MyApponment></MyApponment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='histroy' element={<Historoy></Historoy>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
