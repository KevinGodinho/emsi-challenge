import React from "react";

const IndustryItems = ({
  employingIndustries: { industries, jobs },
  getIndustryPercent
}) => {
  return (
    <div>
      {industries.map((industry, i) => {
        const { title, in_occupation_jobs } = industry;
        return (
          <div key={i} className={"navbar-no-pad border-bottom"}>
            <div>
              <p className={"text-blue py-bottom"}>
                <i className={"fa fa-building"}></i> {title}
              </p>
            </div>
            <div className={"grid-3-gap text-right"}>
              <p className={"py-bottom"}>
                {in_occupation_jobs.toLocaleString()}
              </p>
              <p>{`${getIndustryPercent(in_occupation_jobs, jobs)}%`}</p>
              <p>{`${getIndustryPercent(
                in_occupation_jobs,
                industry.jobs
              )}%`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustryItems;
