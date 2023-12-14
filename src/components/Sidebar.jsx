import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";

import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Sidebar = ({value}) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  const anavigate=useNavigate();
  const handlerLogout=()=>{
    console.log("error")
    axios.get("https://eeedatabase.onrender.com/auth/logout")
    .then(result=>{
			if(result.data.status){
        anavigate("/adminlogin")
      }
		}).catch(err => console.log(err))
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          E<span>E</span>E
        </span>
      </div>

      <div className="menu">
        {value.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span >{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem" onClick={handlerLogout}>
         
          <UilSignOutAlt />
       
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
