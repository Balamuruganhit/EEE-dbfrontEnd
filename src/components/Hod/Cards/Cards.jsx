
import React from "react";
import "./Cards.css";


import Card from "../Card/Card";

const Cards = ({data}) => {
  
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
      {data.map((card, id) => {
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
