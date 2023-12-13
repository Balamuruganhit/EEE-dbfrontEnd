import React, { useState } from "react";
import "./attendance.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";



const a=[21,34,21,23,43]

const attendance=()=>{
	return(  
		<div className="boxes">
			<div className="box">
				<h2>Control System</h2>
				<div className="dater">
				<h4>Present:23</h4>
				<h4>Total Hours:30</h4>
				
				<CircularProgressbar
         				 value={a[0]}
          				text={`${a[0]}%`}
						minValue={0}
					  maxValue={25}
        		/>
				
				</div>
				
				
			</div>
			<div className="box">
				<h2>Ac Machines</h2>
				<div className="dater">
				<h4>Present:23</h4>
				<h4>Total Hours:30</h4>
				<CircularProgressbar
         				 value={a[1]}
          				text={`${a[1]}%`}
						minValue={0}
					  maxValue={35}
        		/>
				</div>
			
			</div>
			<div className="box">
				<h2>Analysis Of Signal And System</h2>
				<div className="dater">
				<h4>Present:23</h4>
				<h4>Total Hours:30</h4>
				<CircularProgressbar
         				 value={a[2]}
          				text={`${a[2]}%`}
						minValue={0}
					  maxValue={26}
        		/>
				</div>
				
			</div>
			<div className="box">
				<h2>Electrical Energy Conservation And Utilization</h2>
				<div className="dater">
				<h4>Present:23</h4>
				<h4>Total Hours:30</h4>
				<div className=" center"><CircularProgressbar
         				 value={a[3]}
          				text={`${a[3]}%`}
						minValue={0}
					  maxValue={25}
        		/>
				</div>
				</div>
				
			</div>
			<div className="box">
				<h2>Internet OF Things</h2>
				<div className="dater">
				<h4>Present:23</h4>
				<h4>Total Hours:30</h4>
				<CircularProgressbar
         				 value={a[4]}
          				text={`${a[4]}%`}
						minValue={0}
					  maxValue={45}
        		/>
				</div>
				
			</div>
			
		</div>
	);
};

export  default attendance;

