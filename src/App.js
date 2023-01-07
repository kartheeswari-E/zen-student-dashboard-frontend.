import './App.css';
import Home from './Component/Home';
import { Routes, Route} from "react-router-dom";
import Template from './Component/Template';
import Codetemp from './Component/Codekatta/Codetemp';
import  Email from './Component/Email';
import Newpassword from './Component/Newpassword';
import Admin from './Component/Admin/Admin';
import Task from './Component/Task';
import { Activites } from './Component/Activites';
import Activitiesques from './Component/Activitiesques';
import Datas from './Component/Datas';
import Ctemp from './Component/Codekatta/Ctemp';
import Webcatta from './Component/Webcatta/Webcatta';
import Create from './Component/Create';
import Adminlog from './Component/Admin/Adminlog';
function App() {
  return <>
  <Routes>
  
        <Route path="/" element={ <Home/> } />
        <Route path="/email" element={ <Email/> } />
 <Route path="/dashboard" element={<Template/> } />
 <Route path="/codekatta" element={<Codetemp/> } /> 
 <Route path='/api/password-reset/:id/:token' element={<Newpassword/>} />
 <Route path="/activities" element={<Activitiesques/>} /> 
 <Route path="/work" element={<Activites/>} /> 
 <Route path="/admin" element={<Admin/>} /> 
 <Route path="/adminlogin" element={<Adminlog/>} /> 
 <Route path="/task" element={<Task/>} /> 
  <Route path="/api/answer/:id" element={<Datas/> } />
  <Route path="/api/answer/:id" element={<Datas/> } />
  <Route path="/webcatta" element={<Webcatta/> } />
  <Route path="/api/indexs/:id" element={<Ctemp/> } />
  <Route path="/create" element={<Create/> } />

        </Routes>
      
  </>
}

export default App;