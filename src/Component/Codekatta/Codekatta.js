import React from 'react'
import '../Codekatta/Codekatta.css'
import codess from './Images/codess.png'
function Codekatta() {
    return<>
     <div className='code-whole-container'>
        <div className='sub-codes'>
   <div className='header-codes'>
    <img  src={codess} alt=''/>
    <h1 className='header-codess'>CODEKATA</h1>
    </div>
    <div>
    <p className='para'>CodeKata is a series of programs curated by the veterans in IT & Software industry. It hosts coding problems asked by top MNCs like Microsoft, Walmart, Samsung & so on. Practising on Codekata will take your coding skills to next level. We will recommend your profile to recruiting companies based on your performance in codekata. You can be a better programmer & crack coding interviews upon practising on CodeKata.</p>
   </div>
   </div>
 </div>



  </>
}

export default Codekatta