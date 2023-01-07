import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Activity.css'


function Tasktemp({data,id}) {
   const navigate=useNavigate();
  return <>

  <div className='main-containers' onClick={() =>navigate(`/api/answer/${id}`)} >
    <div className='menu-tag'>
    <div className='name-container'>E.Kartheeswari</div>
    <div className='display-ques-container'>{data.Question}</div>
</div>
  </div>
  </>
}



export default Tasktemp

