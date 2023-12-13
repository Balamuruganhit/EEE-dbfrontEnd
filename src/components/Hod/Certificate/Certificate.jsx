import { Box,useTheme,Button} from "@mui/material";
import './Certificate.css'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {UilSearch,UilBell} from "@iconscout/react-unicons";
import { tokens } from "../../../theme";
import React from "react";


const Certificate=()=>{
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
  const doner='Certification'
	return(<div>
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
		<Box m="20px"
    sx={{
      overflow:"scroll",
      height:"30rem",
      "& .MuiBox-root":{
        overflowX: "none",
        overflowY: 'none',
      },
      "& .css-690iln":{
        display:"none",
      }
    }}
    >
      

      <Accordion defaultExpanded>
      <div className="cell">
        <AccordionSummary expandIcon={null}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Abinesh
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography>
            Register No: 91762113010
          </Typography>
          <Typography>
            For: Scholarship upadte
          </Typography>
        </AccordionDetails>
        <div className="handlerForButton">
        <button className='accept'variant='contained'>Accept</button>
        <button className='reject'variant='contained'>Reject</button>
        </div>
        </div>
      </Accordion>
      <Accordion defaultExpanded>
      <div className="cell">
        <AccordionSummary expandIcon={null}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            AjayKumar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Register No: 91762113010
          </Typography>
          <Typography>
            For: Bank purpose
          </Typography>
        </AccordionDetails>
        <div className="handlerForButton">
        <button className='accept'variant='contained'>Accept</button>
        <button className='reject'variant='contained'>Reject</button>
        </div>
        </div>
      </Accordion>
      <Accordion defaultExpanded>
      <div className="cell">
        <AccordionSummary expandIcon={null}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Gokul
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Register No: 91762113010
          </Typography>
          <Typography>
            For: Update for eductional loan
          </Typography>
        </AccordionDetails>
        <div className="handlerForButton">
        <button className='accept'variant='contained'>Accept</button>
        <button className='reject'variant='contained'>Reject</button>
        </div>
        </div>
      </Accordion>
      <Accordion defaultExpanded>
      <div className="cell">
        <AccordionSummary expandIcon={null}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Gandhiraj
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Register No: 91762113010
          </Typography>
          <Typography>
            For: Scholarship upadte
          </Typography>
        </AccordionDetails>
        <div className="handlerForButton">
        <button className='accept'variant='contained'>Accept</button>
        <button className='reject'variant='contained'>Reject</button>
        </div>
        </div>
      </Accordion>
      <Accordion defaultExpanded>
      <div className="cell">
        <AccordionSummary expandIcon={null}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Jeeyanthan
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Register No: 91762113010
          </Typography>
          <Typography>
            For: Scholarship upadte
          </Typography>
        </AccordionDetails>
        <div className="handlerForButton">
        <button className='accept'variant='contained'>Accept</button>
        <button className='reject'variant='contained'>Reject</button>
        </div>
        </div>
      </Accordion>
    </Box>
	</div>)
}

export default Certificate;