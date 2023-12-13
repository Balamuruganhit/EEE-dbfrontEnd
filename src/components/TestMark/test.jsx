import React, { useState } from "react";
import "./test.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
	UilTimes,
	UilEstate,
	UilClipboardAlt,
	UilUsersAlt,
	UilPackage,
	UilChart,
	UilSignOutAlt,
	UilUser,
	UilClipboardNotes,UilEdit,UilCalendarAlt,UilAlignCenter
  } from "@iconscout/react-unicons";



  const test=()=>{
		return(
			<div className="seriesHolder">
				<div className="cards">
					<h4>Series Test 1</h4>
					<table>
						<tr>
							<td className="first">Subject</td>
							<td >Mark</td>
						</tr>
						<tr>
							<td>Control System</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Ac Machine</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Analysis Of Signal And system</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Internet Of Things</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Electrical Energy Conservation </td>
							<td>38</td>
						</tr>
					</table>
				</div>
				<div className="cards">
				    <h4>Series Test 2</h4>
					<table>
						<tr>
							<td className="first">Subject</td>
							<td>Mark</td>
						</tr>
						<tr>
							<td>Control System</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Ac Machine</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Analysis Of Signal And system</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Internet Of Things</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Electrical Energy Conservation </td>
							<td>38</td>
						</tr>
					</table>
				</div>
				<div className="cards">
					<h4>Series Test 3</h4>	
					<table>
						<tr>
							<td className="first">Subject</td>
							<td>Mark</td>
						</tr>
						<tr>
							<td>Control System</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Ac Machine</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Analysis Of Signal And system</td>
							<td>45</td>
						</tr>
						<tr>
							<td>Internet Of Things</td>
							<td>34</td>
						</tr>
						<tr>
							<td>Electrical Energy Conservation </td>
							<td>38</td>
						</tr>
					</table>
				</div>
			</div>
		);
  };

  export default test;