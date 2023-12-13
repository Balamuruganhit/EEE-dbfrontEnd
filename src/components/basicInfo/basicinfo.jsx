import React, { useState,useEffect } from "react";
import "./basicinfo.css";
// import {
// 	UilTimes,
// 	UilEstate,
// 	UilClipboardAlt,
// 	UilUsersAlt,
// 	UilPackage,
// 	UilChart,
// 	UilSignOutAlt,
// 	UilUser,
// 	UilClipboardNotes,UilEdit,UilCalendarAlt,UilAlignCenter
//   } from "@iconscout/react-unicons";
  import { images }  from "../../Data/Data";
  import axios from 'axios'
  import  {useParams} from 'react-router-dom'

const BasicInfo = () => {
	const {id}=useParams();
	const [personalData,setStudent]=useState([]);
	const url="https://drive.google.com/uc?export=download&id="+personalData.photo;
	
	useEffect(()=>{
		axios.get("https://eeedatabase.onrender.com//data/detail/"+id)
		.then(result=>{
			if (result.data){
			  setStudent(result.data)
			
			}
			else{
			  alert(result.data.Error)
			}
			
		  }).catch(err => console.log(err))
		 
	})
	
	return (
	          <div className="Info">
		            
					

						<div className="top">
											
									<div className="image">
										<img src={url} alt ="mg"></img>
										</div>
											
							<div className="right">
									<h4>Name: {personalData.name}</h4>
									<h4>Batch: 2021-2025</h4>
									<h4>Degree/Batch: BE/EEE</h4>
							
							</div>
							<div className="left">
								<h4>Regulation: 2019A</h4>
								<h4>Roll Number: {personalData.registrarId}</h4>
								<h4>Date of Joining: 20/08/2021</h4>
							</div>
							
						</div>
						<div className="bottom">
							<div className="postLeft">
								<h4>Gender: {personalData.Gender}</h4>
								<h4>Date Of Birth: {personalData.DOB}</h4>
								<h4>Nationality: Indian</h4>
								<h4>Religious: {personalData.regligion}</h4>
								<h4>Mother Tongue:{personalData.tongue}</h4>
								<h4>Community/Caste:{personalData.community}/{personalData.caste}</h4>
							</div>
							<div className="preright">
								<h4>language known:English,Hindi</h4>
								<h4>Blood Group: {personalData.blood}</h4>
								<h4>Father Name:{personalData.father}</h4>
								<h4>Mother Name:{personalData.mother}</h4>
								<h4>Father Occupation: {personalData.occupation}</h4>
								<h4>Mother Occupation: {personalData.moccupation}</h4>
								<h4>modile No:{personalData.phoneno}</h4>				
							</div>
							<div className="preleft">
								<h4>Hosteller: {personalData.hostel}</h4>
								<h4>Aadhar No:{personalData.aadhar}</h4>
								<h4>Father No:{personalData.fphone}</h4>
								<h4>Email ID: {personalData.email}</h4>
								<h4> Home Address:{personalData.address}</h4>
								<h4>Hostell Name:{personalData.hName}</h4>
								<h4>Room No:{personalData.room}</h4>
							</div>
						</div>
						
					
					
            
                </div>
	);
  };

export default BasicInfo;