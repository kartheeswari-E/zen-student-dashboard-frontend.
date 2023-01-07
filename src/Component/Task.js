import React ,{useEffect,useState}  from 'react';
import Sidebar from './Sidebar';
import  Navbar  from './Navbar';
import Tasktemp from './Tasktemp';
import './Activity.css'

function Task() {
    const [answer, setanswer] = useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/answer/allanswer`)
        .then((data) => data.json())
        .then((answ) => setanswer(answ));
    }, []);
  return <>
   <Navbar/>
   <div className='answ-container'>
    {answer.map((answ,index) => (
          <Tasktemp key={answ._id} id={answ._id} data={answ} />
))}
        </div>
        
        <Sidebar/>
  </>
}

export default Task