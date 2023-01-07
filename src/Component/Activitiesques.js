import React , { useState }  from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Activitytempl from './Activitytempl';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Activity.css'

function Activitiesques() {
     
    const [toggle, settoggle] = useState(false);
  return<>
  <Navbar/>
  <div className='whole-activitiesques-container'>

  
    <div className='question-enter-container'>
        <div className='whole-content-container'>
            <div className='Toggle-type'>
        <h4 className='headind-your-activity'>Your Task</h4>
        <div className='toggle-button' onClick={() => settoggle(!toggle)}>
        {toggle ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
    </div>

    {toggle?<div><Activitytempl/>
   </div>:""}
  
    </div>
    </div>
  </div>
  <Sidebar/>
  </>
}

export default Activitiesques