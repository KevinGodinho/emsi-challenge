import React from "react";

const Legend = ({ trendComparison: { regional, state, nation } }) => {
  const yearArray = [regional, state, nation];
  const titles = ["Region", "State", "Nation"];
  const icons = [
    "fa fa-circle text-danger",
    "fa fa-square text-blue",
    "fa fa-star text-orange"
  ];
  return (
    <div>
      {yearArray.map((trend, i) => {
        return (
          <div key={i} className={"kev-grid border-bottom"}>
            <p className={"text-dark p"}>
              <i className={`${icons[i]} py-1n-right`}></i> {titles[i]}
            </p>
            <p className={`text-dark kev-grid-0 p text-right`}>
              {trend[0].toLocaleString()}
            </p>
            <p className={`text-dark kev-grid-1 p text-right`}>
              {trend[trend.length - 1].toLocaleString()}
            </p>
            <p className={`text-dark kev-grid-2 p text-right`}>
              {(trend[trend.length - 1] - trend[0]).toLocaleString()}
            </p>
            <p className={`text-dark kev-grid-3 p text-right`}>10.2%</p>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
