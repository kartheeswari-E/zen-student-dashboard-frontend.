import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Cedit from './Cedit'
import Codeques from './Codeques'

function Ctemp() {
  return <>
  <Navbar/>
  <div className='wraps'>
  <Codeques/>
  <Cedit/></div>
  <Sidebar/>
  </>
}

export default Ctemp