import React ,{useEffect, useState}from 'react'
import { Box , Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import './Attendance.css'
import { useTheme } from "@mui/material";
import { UilSearch ,UilBell} from '@iconscout/react-unicons';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";




const Attendance =()=>{
	const [student,setStudent]=useState([]);
	const [values, setValues] = useState({
		mark: '',
		test: '',
		
	})
	
	const [error, setError] = useState(null);
	
	useEffect(()=>{
	  axios.get("https://eeedatabase.onrender.com//data/sent")
	  .then(result=>{
		if (result.data){
		  setStudent(result.data)
		  
		}
		else{
		  alert(result.data.Error)
		}
	  }).catch(err => console.log(err))
	})
	

	
	
	async function handleFormSubmit (event) {
		console.log(values)
		await axios.post("https://eeedatabase.onrender.com//data/mark",values)
		.then(result=>{
			console.log(result)
			setError(result.data)
		}).catch(err => console.log(err))
	}
	
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

  
  
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
		field: "mark",
		headerName: "Series Test 1",
		type: "number",
		width:"2rem",
		flex: 0.5,
	  },
	  {
		field: "mark2",
		headerName: "Series Test 2",
		type: "number",
		flex: 0.5,
	  },
	  {
		field: "mark3",
		headerName: "Series Test 3",
		type: "number",
		flex: 0.5,
	  },
	 
	  
	];
	const handleSubmit = (values, { setSubmitting }) => {
		// Handle form submission
		handleFormSubmit()
		console.log('Form submitted with values:', values);
		setSubmitting(false);
	  };
  
  
	return (
	  <div>
		<div className="topper">
				  <div className="greet">
					  <h1>Student Mark Entry And View</h1>
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
		  width='45rem'
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
				  age:false,
				  phoneno:false,
				  email:false,
				},
			  },
			}}
		  />
		</Box>
		<Formik
        initialValues={{
          myField: '',
          // Add other initial field values here
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange ,values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
			<h1 className='info'>Test Mark Entry</h1>
            <div>
              <select className='decider' name='test' onChange={(e) => {
				handleChange(e);
				 setValues({ ...values, test: e.target.value })}
				
			  }>
				<option className='once' value="s1">Series Test1</option>
				<option className='once' value="s2">Series Test2</option>
				<option className='once' value="s3">Series Test3</option>
				</select>
              <textarea   type="text" id="myField" name="myField"  className='sender'
			  onChange={(e) => {
				handleChange(e);
				setValues({ ...values, mark: e.target.value })}
				
			  }
			  placeholder="Enter Student Mark like 20,30"

			  />
              <ErrorMessage name="myField" component="div"  className='adder'/>
            </div>
            {/* Other form fields go here */}
			<div className='error'>{error&&error}</div>
            <button className='add' type="submit" disabled={isSubmitting || values.myField.length === 56}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
	  </Box>

	  </div>
	)
}
const validationSchema = yup.object().shape({
	myField: yup
	  .string()
	  .test(
		'is-number-and-length',
		'You should not enter 56 Student mark',
		(value) => {
		  // Remove commas and check length while considering before commas as one character
		  const stringWithoutCommas = value ? value.replace(/\d+,/g, '1') : '';
		  return !isNaN(stringWithoutCommas) && stringWithoutCommas.length === 56;
		}
	  )
	  .required('Field is required'), // Example: Making the field required
  });

export default Attendance;