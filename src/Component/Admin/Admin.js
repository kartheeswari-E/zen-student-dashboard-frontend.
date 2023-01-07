import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Question from './Question'
import Side from './Side';
function Subnav(){
  return<>
<div className='small-container'>
  <button className='profile-container'>Profile</button>
  <button className='profile-container'>Logout</button>
</div>
  </>
}
function Admin() {
  const[toggle,settoggle]=useState(false)
  return<>
  <div className='whole-nav'>
    <div className='heading-nav'>
      <h3>Admin</h3>
      <div className='sub-whole-nav'>
      <div className='profile-name'>
        <p>Karthiga</p>
          </div>
          <div onClick={()=>settoggle(!toggle)} className='images'>
          <AccountCircleIcon style={{}}/>
{toggle?<div className='sub'><Subnav/></div>:""}
       
          </div>
      </div>
    </div>


  </div>
  <Question/>
  <Side/>
  </>
}

export default Admin