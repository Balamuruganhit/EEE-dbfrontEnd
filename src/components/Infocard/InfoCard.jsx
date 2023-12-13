import React from "react";
import "./InfoCard.css";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";
const InfoCard =()=>{
	return (
		<div className="Cards">
		  {cardsData.map((card, id) => {
			return (
			  <div className="parentContainer" key={id}>
				<Card
				  
				  title={card.title}
				  color={card.color}
				  
				  img={card.Img}
				  barValue={card.barValue}
				  value={card.value}
				  
	
				/>
			  </div>
			);
		  })}
		</div>
	  );
}

export default InfoCard