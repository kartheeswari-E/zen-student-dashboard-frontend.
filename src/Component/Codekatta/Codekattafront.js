import { useNavigate } from 'react-router-dom'
import React from 'react'
import '../Codekatta/Codekatta.css'
function Codekattafront({data,id}) {
  const navigate=useNavigate();
  return <>
    <div className='sub-code-cont'>
        <div className='head-code'>{data.index}</div>
        <div className='heads-codee'>Beginner Problem</div>
        <button className='start'onClick={() =>navigate(`/api/indexs/${id}`)}>Start</button>
</div>
</>
}

export default Codekattafront
