import React, { useEffect, useState }  from 'react'
import '../Codekatta/Codekatta.css'
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
function Codeques() {
    const {id} = useParams(); 

    const [answer, setanswer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/indexs/${id}`)
          .then((data) => data.json())
          .then((answ) => setanswer(answ));          
      },[]);
  return <>
  <div className='f-container'>
<div className='container-contain'>
    <div>
    <div className='ques-con'>{answer.ques}</div>
    </div>
    <div className='con'>
        <h5>Input Description:</h5>
        <div className='des-con'>{answer.input} </div>
        </div>
    <div className='con'>
    <h5>Output Description:</h5>
        <div className='out-con'>{answer.output} </div>
        </div>
    <div className='con'>
    <h5>Sample Input:</h5>
        <div className='sami-con'>{answer.sami} </div>
        </div>
    <div className='con'>
    <h5>Sample Output:</h5>
        <div className='samo-con'>{answer.samo} </div>
        </div>
        <button onClick={()=>{navigate(-1)}}>Back</button>
</div>
<div className='answers-box'>
<div className='y'>Your Entered Code</div>
  <div className='a'>{answer.answer}</div>
  <div className='a'>YOU GOT {answer.mark} MARKS</div>
  <button  className='containers-button'>Done</button>
  </div>
  </div>
    </>
}


export default Codeques