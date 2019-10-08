import React from "react";

const LegendHeader = ({ trendComparison: { start_year, end_year } }) => {
  return (
    <div className={"border-bottom kev-grid"}>
      <p className={"text-dark py-2-left"}>Region</p>
      <p className={"text-dark text-right"}>{start_year} Jobs</p>
      <p className={"text-dark text-right"}>{end_year} Jobs</p>
      <p className={"text-dark text-right"}>Change</p>
      <p className={"text-dark text-right"}>% Change</p>
    </div>
  );
};

export default LegendHeader;
