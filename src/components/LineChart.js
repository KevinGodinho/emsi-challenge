import React from "react";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const LineChart = ({
  trendComparison: { start_year, end_year, regional, state, nation },
  getPercentChange
}) => {
  const yearArray = [];
  const stateArray = [];
  const regionalArray = [];
  const nationArray = [];
  const headersArray = ["Year", "State", "Regional", "Nation"];

  for (let i = 1; i < regional.length; i++) {
    regionalArray.push(getPercentChange(regional[i - 1], regional[i]));
    stateArray.push(getPercentChange(state[i - 1], state[i]));
    nationArray.push(getPercentChange(nation[i - 1], nation[i]));
  }

  // taking off last piece of nation array (NaN) due to missing number in API
  // Kaleb told me to just work around it
  nationArray.pop();

  for (var i = start_year; i < end_year + 1; i++) {
    yearArray.push(i.toString());
  }

  // data and options for chart (react-google-charts format)
  const data = [
    headersArray,
    ["2014", 3.78, 4.03, 2.12],
    ["2015", 0.007, -0.26, 2.32],
    ["2016", 2.71, 2.66, 1.54],
    ["2017", 1.98, 1.9, 2.56],
    ["2018", 1.58, 1.5, 2.56]
  ];

  const options = {
    title: "Regional Trends",
    curveType: "function",
    legend: "none",
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
