import './App.css'
import DashBoard1 from './components/Hod/Dashboard/Dashboard.jsx';
import Login from "./components/Login/Login"
import MainDash1 from './components/Hod/MainDash1/MainDash1';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Faculty from './components/Hod/Faculty/Faculty.jsx'
import Student from './components/Hod/Student/Student.jsx';
import Certificate from './components/Hod/Certificate/Certificate.jsx';
import DashBoard from './components/Dashboard/Dashboard.jsx';
import Landing from './components/Landing/Landing.jsx';
import Attendance from './components/Hod/Attendance/Attendance.jsx';
import Mark from './components/Hod/Mark/Mark.jsx';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/adminlogin' element={<Login/>}></Route>
      <Route path='/dashboard/:designation' element={<DashBoard1/>}>
        <Route path='' element={<MainDash1/>}></Route>
        <Route path='/dashboard/:designation/faculty' element={<Faculty/>}></Route>
        <Route path='/dashboard/:designation/attendance' element={<Attendance/>}></Route>
        <Route path='/dashboard/:designation/mark' element={<Mark/>}></Route>
        <Route path='/dashboard/:designation/student' element={<Student/>}></Route>
        <Route path='/dashboard/:designation/certificate' element={<Certificate/>}></Route>
        </Route>
        <Route path='/studentDs/:id' element={<DashBoard/>}></Route>
      
    </Routes>
    
    </BrowserRouter>
    


  );
}

export default App;
