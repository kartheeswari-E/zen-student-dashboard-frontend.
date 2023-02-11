import React ,{useEffect,useState}  from 'react';
import Sidebar from './Sidebar';
import  Navbar  from './Navbar';
import Tasktemp from './Tasktemp';
import './Activity.css'

function Task() {

  const dar = window.localStorage.getItem("id");
    const [answer, setanswer] = useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/userfirst/${dar}`)
        .then((data) => data.json())
        .then((answ) => setanswer(answ.task))
    }, []);
  return <>
   <Navbar/>
   <div className='answ-container'>
    <div className='design'></div>
    {answer.map((answ,index) => (
          <Tasktemp key={index} id={answ._id} data={answ} />
))}
        </div>
        
        <Sidebar/>
  </>
}

export default Task