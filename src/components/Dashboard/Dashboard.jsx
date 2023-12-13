import React, { useEffect,useState } from 'react'
import './Dashboard.css'
import  {useParams} from 'react-router-dom'
import { SidebarData } from "../../Data/Data";
import MainDash from '../MainDash/MainDash'
import Sidebar from '../Sidebar';
import axios from 'axios'



const DashBoard = () => {
	
	
	return (
		<div className="App">
		 <div className="AppGlass">
		    <Sidebar value={SidebarData}></Sidebar>
			<MainDash ></MainDash>
			
			</div> 
		</div>
	);
  };
  
  export default DashBoard;
  