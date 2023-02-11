import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './Activity.css'
import Task from './Task';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Datas() {
    const {id} = useParams(); 

    const [answer, setanswer] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/userfirst/up/${id}`)
          .then((data) => data.json())
          .then((answ) => console.log(answ));          
      },[]);
  return <>
   <Navbar/>
    
  <div className='answ-containers' >
 <div className='design'></div>
   <div className='main-containerss' >
 <div className='menu-tag'>
  <div className='w'><div className='name-container'>E.Kartheeswari</div>
  <div className='ts'><div className='ss'>Task</div></div></div>
    
    <div className='display-ques-container'>{}</div>
</div>
<div className='li'></div>
<div className='ans-menu'>
  <div className='heading-menu'>Answers</div>
  <div className='box-cont-ans'>
    <div>Frontend_url:
    <a className='target' href={`http://${answer.answer1}`} target="_blank" >{answer.answer1}</a>
    </div><div>Backend_url:
    <a className='target' href={`http://${answer.answer2}`} target="_blank" >{answer.answer2}</a>
  </div></div>
  <button onClick={()=>{navigate('/task')}} style={{"marginLeft":"330px","width":"100px","border-radius":"5px","color":"white","background":"green","border":"none"}}>Back</button>
</div>
</div></div>
<Sidebar/>
    </>
}

export default Datas