import React from "react";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const LineChart = ({
  trendComparison: { start_year, end_year, regional, state, nation },
  getPercentChange
}) => {
  // function to create data array from API for line chart
  const createDataArray = () => {
    const headersArray = ["Year", "State", "Regional", "Nation"];
    const yearArray = [];
    const stateArray = [];
    const regionalArray = [];
    const nationArray = [];

    // data for chart (react-google-charts format)
    const data = [[], [], [], [], []];

    // create years array for x-axis of line chart
    for (var i = start_year + 1; i < end_year + 1; i++) {
      yearArray.push(i.toString());
    }

    // create arrays for y-axis by calculating job number percentage change
    for (let i = 1; i < regional.length; i++) {
      regionalArray.push(getPercentChange(regional[i - 1], regional[i]));
      stateArray.push(getPercentChange(state[i - 1], state[i]));
      nationArray.push(getPercentChange(nation[i - 1], nation[i]));
    }

    // create final data array for line chart
    for (let i = 0; i < headersArray.length + 1; i++) {
      data[i].push(yearArray[i]);
      data[i].push(stateArray[i]);
      data[i].push(regionalArray[i]);
      data[i].push(nationArray[i]);
    }

    // add headers array to front of data array
    data.unshift(headersArray);

    // API is missing a number for nation under trend comparison.
    // Kaleb said to just add a number and work around it
    data[5].pop();
    data[5].push(2.2);

    // leave this log to show data format needed for chart
    console.log(data);

    return data;
  };

  // options for chart (react-google-charts format)
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
        data={createDataArray()}
        options={options}
      />
    </div>
  );
};

export default LineChart;
