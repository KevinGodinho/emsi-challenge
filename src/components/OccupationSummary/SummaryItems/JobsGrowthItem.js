import React from "react";

const JobsGrowthItem = ({ jobsGrowth }) => {
  return (
    <div className={"card text-center"}>
      <p className={"text-success"}>{`+ ${jobsGrowth.regional}`}</p>
      <p
        className={"text-dark"}
      >{`% Change (${jobsGrowth.start_year}-${jobsGrowth.end_year})`}</p>
      <p>
        Nation:{" "}
        <span className={"text-success"}>{`+${jobsGrowth.national_avg}%`}</span>
      </p>
    </div>
  );
};

export default JobsGrowthItem;
