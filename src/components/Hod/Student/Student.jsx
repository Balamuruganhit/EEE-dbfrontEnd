import React ,{useEffect, useState}from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

import { useTheme } from "@mui/material";
import { UilSearch ,UilBell} from '@iconscout/react-unicons';
import axios from 'axios'

const Student = () => {
  const [student,setStudent]=useState([])
  useEffect(()=>{
    axios.get("https://eeedatabase.onrender.com/auth/student")
    .then(result=>{
      if (result.data){
        setStudent(result.data)
        
      }
      else{
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
  })
 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
const doner='Student Detail';


  const columns = [
    {field: "id", headerName: " ID"},
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phoneno",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      hide:true,
    },
    
    
    
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      hide:true,
    },
    
  ];


  return (
    <div>
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
    <Box m="20px">
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            borderBottomRightRadius:'5px',
            borderBottomLeftRadius:'5px',
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-root": {
            displayPrint:'none',
          },
          
          "& .MuiButton-root":{
            dispaly:'none',
            color:"black !important"  ,
            gap:"2",
            padding:"10px",
            width:'7rem !important',
            height:'40px',
            fontSize:'12px',
            backgroundColor:"white",
            marginBottom:"10px",
          },
          "& .css-qvtrhg-MuiDataGrid-virtualScroller":{
            scrollbarWidth:"1px",
            height:'80rem',

          },
          "& .css-qvtrhg-MuiDataGrid-virtualScroller::-webkit-scrollbar":{
            display:"none",
          },
          "@media print":{
            '.MuiDataGrid-toolbarContainer':{
              display:'none'
            }
          }
          
        }}
      >
        <DataGrid
        sx={{
          "@media print":{
            '.MuiDataGrid-toolbarContainer':{
              display:'none'
            }
          }
        }}
          rows={student}
          columns={columns}

          components={{ Toolbar: GridToolbar }}
          
           initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                address: false,
                city: false,
              },
            },
          }}
        />
      </Box>
    </Box>
    </div>
	);

    };




export default Student;