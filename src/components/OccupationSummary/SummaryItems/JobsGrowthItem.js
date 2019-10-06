import React from "react";

const JobsGrowthItem = ({
  jobsGrowth: { regional, start_year, end_year, national_avg }
}) => {
  return (
    <div className={"card text-center"}>
      <p className={"text-success"}>{`+ ${regional}`}</p>
      <p className={"text-dark"}>{`% Change (${start_year}-${end_year})`}</p>
      <p>
        Nation: <span className={"text-success"}>{`+${national_avg}%`}</span>
      </p>
    </div>
  );
};

export default JobsGrowthItem;
