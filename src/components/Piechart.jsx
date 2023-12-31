import { ResponsivePie } from "@nivo/pie";


import { mockPieData as data } from "../Data/mockData";

const PieChart = () => {
  
 
  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: 'red',
            },
          },
          legend: {
            text: {
              fill: 'red',
            },
          },
          ticks: {
            line: {
              stroke: 'white',
              strokeWidth: 1,
            },
            text: {
              fill: 'black',
            },
          },
        },
        legends: {
          text: {
            fill: 'grey',
			
          },
        },
      }}
      margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
      innerRadius={0.7}
      padAngle={0.7}
      cornerRadius={10}
      activeOuterRadiusOffset={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={'black'}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 0,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
