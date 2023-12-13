
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
// import {
//   UilEstate,
//   UilClipboardAlt,
//   UilUsersAlt,
//   UilPackage,
//   UilChart,
//   UilSignOutAlt,
//   UilUser,
//   UilClipboardNotes,UilEdit,UilCalendarAlt,UilAlignCenter
// } from "@iconscout/react-unicons";
import BasicInfo from "../basicInfo/basicinfo"
import Attendance from "../attendance/attendance"
import Test from '../TestMark/test'
import Bonafide from '../Bonafied/Bonafied'
// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};
// function IconChooser(title){
//  if(title === 'Basic Info'){
//   return <UilUser></UilUser>
//  }
//  else if(title === 'Attendance Details'){
//  return <UilCalendarAlt></UilCalendarAlt>
//  }
//  else if(title === 'Series Test Mark'){
//   return <UilEdit></UilEdit>
//  }
//  else{
//  return <UilClipboardNotes></UilClipboardNotes>
//  }
// }

// Compact Card
function CompactCard({ param, setExpanded }) {
 
  return (
   
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      {/* <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div> */}

      <div className="content">
           <span className="span">
             {param.title}
           </span>
            <span className="icon" >
               {/* <UilUser></UilUser> */}
            
           </span>
       </div>
     
     
        
    </motion.div>
    
    
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

  if(param.title === "Basic Info"){
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
         <div className="cross" style={{alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <BasicInfo></BasicInfo>
          
      </motion.div>
    );
  }
  else if(param.title === "Attendance Details"){
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div className="cross" style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{param.title}</span>
          <Attendance></Attendance>
        {/* <div className="chartContainer">
        <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
        </div>
        <span>Last 24 hours</span> */}
      </motion.div>
    );
  }
  else if(param.title === "Series Test Mark"){
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div className="cross" style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <Test></Test>
        
      </motion.div>
    );
  }
  else{
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{param.title}</span>
        <div className="chartContainer">
         <Bonafide></Bonafide>
        </div>
        <span></span>
      </motion.div>
    );
  }

  //this is the create chart basic data
  // const data = {
  //   options: {
  //     chart: {
  //       type: "area",
  //       height: "auto",
  //     },

  //     dropShadow: {
  //       enabled: false,
  //       enabledOnSeries: undefined,
  //       top: 0,
  //       left: 0,
  //       blur: 3,
  //       color: "#000",
  //       opacity: 0.35,
  //     },

  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       colors: ["white"],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //     grid: {
  //       show: true,
  //     },
  //     xaxis: {
  //       type: "datetime",
  //       categories: [
  //         "2018-09-19T00:00:00.000Z",
  //         "2018-09-19T01:30:00.000Z",
  //         "2018-09-19T02:30:00.000Z",
  //         "2018-09-19T03:30:00.000Z",
  //         "2018-09-19T04:30:00.000Z",
  //         "2018-09-19T05:30:00.000Z",
  //         "2018-09-19T06:30:00.000Z",
  //       ],
  //     },
  //   },
  // };
//this is return basic template of each expanded card
  // return (
  //   <motion.div
  //     className="ExpandedCard"
  //     style={{
  //       background: param.color.backGround,
  //       boxShadow: param.color.boxShadow,
  //     }}
  //     layoutId="expandableCard"
  //   >
  //     <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
  //       <UilTimes onClick={setExpanded} />
  //     </div>
  //       <span>{param.title}</span>
  //     <div className="chartContainer">
       
  //     </div>
  //     <span>Last 24 hours</span>
  //   </motion.div>
  // );
}

export default Card;
