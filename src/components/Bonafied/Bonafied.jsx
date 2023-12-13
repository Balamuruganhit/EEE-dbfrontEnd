import React,{useState} from "react";
import './Bonafied.css';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Bonafide =()=>{
  const [values, setValues]= useState(null)
    axios.defaults.withCredentials=true;
	const handleFormSubmit = (event) => {
    event.preventDefault();
    

    axios.post("https://eeedatabase.onrender.com/data/student")
    .then(result =>{
      if(result){
       setValues(result)
      }
      else{
        console.log('sorry nothing data is getting')
      }
      
    })
    .catch(err => console.log(err,'error'))
  };
  

  return (
    
    <Box m="20px">
     {values}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              
              sx={{
                "& > div": { gridColumn:  "span 4" },
              }}
            >
             
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Enter Your Detail For Purpose"
                className="fielder"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4",height:'4rem' }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string().test(
    'is-fifteen-characters',
    'String should be 15 characters after removing commas',
    (value) => {
      // Remove commas from the string and check the length
      const stringWithoutCommas = value.replace(/,/g, '');
      return stringWithoutCommas.length === 35;
    })
  
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};



export default Bonafide;