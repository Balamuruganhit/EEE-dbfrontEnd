import React from 'react'
import './Dashboard.css'
import { SidebarData1,SidebarData2 } from "../../../Data/Data";
import Sidebar1 from '../SideBar/Sidebar1';

import {Outlet} from 'react-router-dom';
import  {useParams} from 'react-router-dom'


const DashBoard = () => {
	const {designation}=useParams();
	console.log(designation)
	var data;
	if(designation == 'faculty'){
		 data=  SidebarData2;
	}
	else{
		data = SidebarData1;
	}
	console.log(data)
	return (
		<div className="App">
		 <div className="AppGlass">
		    <Sidebar1 value={data}></Sidebar1>
			
			<Outlet/>
			
		  </div> 
		</div>
	);
  };
  
  export default DashBoard;
  