import React from 'react'
import Sidebar from './Sidebar';
import  Navbar  from './Navbar';
import Dashboard from './Dashboard';
import "./Basic.css";
function Template() {
  return<>
  <Navbar/>
  <Dashboard/>
  <Sidebar/>
    </>
}

export default Template