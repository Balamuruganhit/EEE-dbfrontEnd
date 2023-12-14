import React from 'react';

import './Landing.css'
import img from "../../imgs/background.png"
import img1 from "../../imgs/LOGO copy.png"
import { Link } from 'react-router-dom';

const Landing=()=>{
	const link='/adminlogin';


	return(
		<div>
			<section className="imager">
						<div className="navbar1">
						<img src={img1} alt ="mg" className='LOGO2'></img>
						
						</div>
						<div className="content5">
							<h1>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
							<p>An autonomous institution permanently affiliated to Anna University </p>
							<p>EXPLORE YOUR DREAM WITH OUR GUIDANCE </p>
							<h3 className='h3'>DEPARTMENT OF ELECTRICAL AND ELECTRONICS ENGINEERING</h3>
							<div className='move2'>
								
							<Link to={link}><button className='butt' id='press' type="button"><span className='span2'></span>LOGIN</button></Link>
							</div>
						</div>
					
    		 </section>
    {/* <section className="Yellow"></section>
    <footer className="footer">
        <div className="row">
            <div className="col2">
            <img src={img} alt ="mg"></img>
        </div>
   
    
        
            <div className="col2">
                <h3>Address <div className="underline"><span></span></div></h3>
                <p>College Road</p>
                <p>Karaikudi-630003</p>
                <p>Sivagangai,Tamilnadu</p>
                <p className="email-id">1234@gmail.com</p>
                <h4> 04565 224528, 224535</h4>
            </div>
            
            <div className="col2">
                <h3>Mandatory disclosure<div className="underline"><span></span></div></h3>
                <ul>
                    <li>AICT</li>
                    <li>Affiliation</li>
                    <li>NBA</li>
                    <li>NAAC</li>
                    <li>Autonomous</li>
                </ul>               
            </div>
            <div className="col2">
                <h3>Social<div className="underline"><span></span></div></h3>
                     <div className="social-icons">
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
                </div>
        </div>
        <hr></hr>
    </footer> */}
		</div>
	)
}


export default Landing;