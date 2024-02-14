import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import {Toaster} from "react-hot-toast";
import { useAuthContext } from './Context/AuthContext';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)
  const {authUser} = useAuthContext();
  console.log(authUser)

  return (
    <>
<div className="p-4 h-[100vh] flex items-center justify-center">

{/* <Login /> */}
{/* <Signup /> */}

  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/login" element={<Login />} /> */}
    {/* <Route path="/signup" element={<Signup/>} /> */}

    <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
    {/* <Route path="/sidebar" element={<Sidebar />} /> */}
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
  </Routes>
    <Toaster />

</div>
 
    </>
  )
}

export default App
