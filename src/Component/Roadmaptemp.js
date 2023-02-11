import React   from 'react';
import './Class.css'

function Roadmaptemp({datas,index, setcontent ,setcontent1,setcontent2, setcontent3,
  setcontent4,front,setfront1,setfront2,setcontent15,
  setcontent5, setcontent6, setcontent7,
  setcontent8, setcontent9, setcontent10,setcontent11,
  setactive,setupd, setactives}) {
    
  return <>

    <div onClick={()=>{setcontent(`${datas.recording}`) 
    setcontent1(`${datas.topic}`)
    setcontent2(`${datas.date}`) 
    setcontent3(`${datas.intro}`) 
    setcontent4(`${datas.last}`) 
    setcontent5(`${datas.intro3}`) 
    setcontent6(`${datas.intro4}`) 
    setcontent7(`${datas.intro5}`) 
    setcontent8(`${datas.intro2}`) 
    setcontent9(`${datas.intro1}`)
    setcontent11(`${datas.intro6}`)
    setcontent10(`${datas.question}`) 
    setcontent15(`${datas.rec}`)
  
    setactive(true) 
    setactives(true)    }}  className={`session${index + 1}`}>
            <div className="article">{index+ 1}</div>
            <div className={`line line${index + 1}`}></div>
            
          </div>
  </>
}

export default Roadmaptemp

