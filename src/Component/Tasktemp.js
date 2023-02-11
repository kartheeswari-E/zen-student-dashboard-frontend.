import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Activity.css'


function Tasktemp({data,id,index}) {
  const[hai,sethai]=useState(false);
   const navigate=useNavigate();
  return <>
  <div className='main-containers'onClick={()=>sethai(!hai)}  >
 <div style={{"display":"flex","flexDirection":"row"}}><div className='menu-tag'>
    <div className='name-container'>E.Kartheeswari</div>
    <div className='display-ques-container'>{data.day}</div>
</div>
<div className='t'><div className='s'>Task</div></div>
</div>
{hai?<div className='af'>
<div className='heading-menu'>Answers</div>
  <div className='box-cont-ans'>
    <div>Frontend_url:
    <a className='target'  target="_blank" >{data.answer1}</a>
    </div><div>Backend_url:
    <a className='target'  target="_blank" >{data.answer2}</a>
  </div></div>
</div>:""}</div>
  
  </>
}



export default Tasktemp

