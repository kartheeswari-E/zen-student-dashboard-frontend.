import React, { useState, useEffect } from 'react'
import '../Codekatta/Codekatta.css'
import Codekattafront from './Codekattafront'
function Code() {
    const [index, setindex] = useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/indexs/allindexs`)
        .then((data) => data.json())
        .then((das) => setindex(das));
  
    }, []);
  return<>
  <div className='whole-code-data-cont'>
  {index.map((das) => (
          <Codekattafront key={das._id} data={das} id={das._id} />
        ))}
  </div>
  </>
}

export default Code