import React, { useEffect,useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Activity.css'
import Swal from 'sweetalert2'
import InfoIcon from '@mui/icons-material/Info';
function Activitytoogle({data}) {

       const [mark,setmark]=useState([]);

       useEffect(() => {Swal.fire({
              title: 'Information About To Submit Task',
              text: 'Please CLICK the Click button to Submit Your Task',
              icon: <InfoIcon/>,
              confirmButtonText: 'Done'
            })}, []);

       const navigate=useNavigate();
  return <>
  <div className='list-container'>
<div className='question-box'>
       <h4>{data.Question}</h4>
       
       
<div className='last-button'>
       <div>{mark}</div>
       <button className='done'type='button' onClick={()=>setmark(mark+5)}>Done</button>
       <button type='button' className='click'onClick={()=>{navigate("/work")}
      }>Click</button></div>
       
    </div>
    </div>
    </>
}

export default Activitytoogle