import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Updates from "../Updates/Updates";
// import BasicInfo from "../basicInfo/basicinfo";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div>
    
    <div className="MainDash">
      <h1>Dashboard (2021-2025)</h1>
      
      <Cards />
      <Table />
      
			
    </div>
    </div>
  );
};

export default MainDash;
