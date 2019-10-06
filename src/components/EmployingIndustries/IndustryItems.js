import React from "react";

const IndustryItems = ({ industries }) => {
  return (
    <div>
      {industries.map(industry => {
        return (
          <div key={industry.naics} className={"navbar-no-pad border-bottom"}>
            <div className={"grid-2"}>
              <p className={"text-blue"}>{industry.title}</p>
            </div>
            <div className={"grid-3-gap"}>
              <p>{industry.in_occupation_jobs}</p>
              <p>37.7%</p>
              <p>8.8%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustryItems;
