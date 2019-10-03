import React from "react";
// import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const LineChart = () => {
  const data = [
    ["Year", "State", "Regional", "Nation"],
    ["2013", 0, 0, 0],
    ["2014", 3.78, 4.03, 2.12],
    ["2015", 0.007, -0.26, 2.32],
    ["2016", 2.71, 2.66, 1.54],
    ["2017", 1.98, 1.9, 2.56],
    ["2018", 1.58, 1.5, 2.56]
  ];
  const options = {
    title: "Regional Trends",
    curveType: "function",
    legend: { position: "bottom" },
    vAxis: {
      title: "Percent Change"
    }
  };

  return (
    <div className="App">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
