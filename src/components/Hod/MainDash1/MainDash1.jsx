import React from 'react'
import './MainDash1.css'
import { UilSearch ,UilBell} from '@iconscout/react-unicons'
import Cards from '../Cards/Cards';
import { staticsData } from "../../../Data/Data";
import Updates from '../../Updates/Updates'
import PieChart from '../../Piechart';
const time=new Date().getHours();
let doner;
if(time>6 && time < 10){
	doner='Good Evening Sir'
}else{
	doner='Good Morning Sir'
}

const MainDash1 =()=>{
	return(
		<div className='storager'>
			<div className="topper">
				<div className="greet">
					<h1>{doner}</h1>
			     </div>
				 <div className="righter">
					<div className="search">
						<input type="text" className='border' placeholder='Search....' />
						<button ><div className="center">
						<UilSearch size={20}style={{alignSelf: "center", cursor: "pointer", color: "black" }}></UilSearch></div></button>
					</div>
					<div className="bell">
						<UilBell size={35}  style={{alignSelf: "center", cursor: "pointer",size:60, color: "black" }}></UilBell>
					</div>
					<div className="circle1"></div>
				 </div>
			</div>
			<div className="states">
			<Cards data={staticsData}></Cards>
			</div>
			<div className="holder">
				
				<div className="flasher">
					<h3>Statics</h3>
					<PieChart></PieChart>
				</div>
				<div className="annocement">
					<h3>Updates</h3>
				<Updates/>
				</div>
			</div>
		</div>
	)
}

export default MainDash1;