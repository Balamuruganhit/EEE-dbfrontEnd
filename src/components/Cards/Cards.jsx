
import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import { studentData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  
  // return (
  //   <div className="Cards">
  //     {cardsData.map((card, id) => {
  //       return (
  //         <div className={card.class} key={id}>
  //           <Card
              
  //             title={card.title}
  //             color={card.color}
  //             barValue={card.barValue}
  //             value={card.value}
  //             png={card.png}
  //             series={card.series}
  //           />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <div className="Cards">
      {studentData.map((card, id) => {
        console.log(id)
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
};

export default Cards;
