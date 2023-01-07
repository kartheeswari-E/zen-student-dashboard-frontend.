import React from 'react'
import Codekatta from './Codekatta'
import Navbar from '../Navbar'
import '../Codekatta/Codekatta.css'
import Sidebar from '../Sidebar'
import Code from './Code'
function Codetemp() {
  return <>
  <Navbar/>
  <Codekatta/>
<Code/>
  <Sidebar/>
  </>
}

export default Codetemp