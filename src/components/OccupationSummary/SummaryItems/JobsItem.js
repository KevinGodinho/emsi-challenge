import React from "react";

const Jobs = ({ jobs: { regional, year }, percentChange }) => {
  return (
    <div className={"card text-center border-right"}>
      <p className={"text-dark"}>{regional}</p>
      <p className={"text-dark"}>{`Jobs (${year})`}</p>
      <p>
        {percentChange}% <span className={"text-success"}>above</span> National
        average
      </p>
    </div>
  );
};

export default Jobs;
