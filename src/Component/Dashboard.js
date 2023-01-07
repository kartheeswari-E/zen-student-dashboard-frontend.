import React from 'react'
import Chartbar from './Chartbar'
import { Chartline } from './Chartline'
import "./Basic.css";
function Dashboard() {
  return<>
  <div className='dash'>
<h3>Activities</h3>
     <div className='two-container'>
  <Chartbar/>
   {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
  <Chartbar/>

</div>
<div className='two-container'>
  <Chartline/>
    </div>
    
  </div>
 
  </>
}

export default Dashboard