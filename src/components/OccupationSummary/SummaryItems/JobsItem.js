import React from "react";

const Jobs = ({ jobs, percentChange }) => {
  return (
    <div className={"card text-center border-right"}>
      <p className={"text-dark"}>{jobs.regional}</p>
      <p className={"text-dark"}>{`Jobs (${jobs.year})`}</p>
      <p>
        {percentChange}% <span className={"text-success"}>above</span> National
        average
      </p>
    </div>
  );
};

export default Jobs;
