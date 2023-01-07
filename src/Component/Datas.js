import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './Activity.css'
import Task from './Task';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Datas() {
    const {id} = useParams(); 

    const [answer, setanswer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/answer/${id}`)
          .then((data) => data.json())
          .then((answ) => setanswer(answ));          
      },[]);
  return <>
   <Navbar/>
  <div className='answ-containers' >
   <div className='main-container' >
 <div className='menu-tag'>
    <div className='name-container'>E.Kartheeswari</div>
    <div className='display-ques-container'>{answer.Question}</div>
</div>
<div className='ans-menu'>
  <div className='heading-menu'>Answers</div>
  <div className='box-cont-ans'>
    <div>Frontend_url:
    <a className='target' href={`http://${answer.Frontend_url}`} target="_blank" >{answer.Frontend_url}</a>
    </div><div>Backend_url:
    <a className='target' href={`http://${answer.Backend_url}`} target="_blank" >{answer.Backend_url}</a>
  </div></div>
  <button onClick={()=>{navigate('/task')}} style={{"marginLeft":"330px","width":"100px","border-radius":"5px","color":"white","background":"green","border":"none"}}>Back</button>
</div>
</div></div>
<Sidebar/>
    </>
}

export default Datas