import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Basic.css";
function Subnav(){
  return<>
<div className='small-container'>
  <button className='profile-container'>Profile</button>
  <button className='profile-container'>Logout</button>
</div>
  </>
}

function Navbar() {
  const[toggle,settoggle]=useState(false)
  return<>
  <div className='whole-nav'>
    <div className='heading-nav'>
      <h3>Dashboard</h3>
      <div className='sub-whole-nav'>
      <div className='profile-name'>
        <p>Kartheeswari</p>
          </div>
          <div onClick={()=>settoggle(!toggle)} className='images'>
          <AccountCircleIcon style={{"fontSize":"40px"}}/>
{toggle?<div className='sub'><Subnav/></div>:""}
       
          </div>
      </div>
    </div>


  </div>
  </>
}

export default Navbar