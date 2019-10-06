import React from "react";
import JobsItem from "./SummaryItems/JobsItem";
import JobsGrowthItem from "./SummaryItems/JobsGrowthItem";
import EarningsItem from "./SummaryItems/EarningsItem";
import "../../App.css";

const OccupationSummary = ({ summary, getPercentChange }) => {
  const jobs = summary.jobs;
  const percentChange = getPercentChange(jobs.national_avg, jobs.regional);

  return (
    <div>
      <h3 className={"my-1 text-dark"}>
        Occupation Summary for Computer Programers
      </h3>
      <div className={"grid-3"}>
        <JobsItem jobs={jobs} percentChange={percentChange} />
        <JobsGrowthItem jobsGrowth={summary.jobs_growth} />
        <EarningsItem earnings={summary.earnings} />
      </div>
    </div>
  );
};

export default OccupationSummary;
