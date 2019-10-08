import React from "react";
import LineChart from "./LineChart";
import LegendHeader from "./Legend/LegendHeader";
import Legend from "./Legend/Legend";

const RegionalTrends = ({ trendComparison, getPercentChange }) => {
  return (
    <div className={"my-bottom"}>
      <LineChart
        trendComparison={trendComparison}
        getPercentChange={getPercentChange}
      />
      <LegendHeader trendComparison={trendComparison} />
      <Legend trendComparison={trendComparison} />
    </div>
  );
};

export default RegionalTrends;
