import React from "react";

const EarningsItem = ({ earnings: { regional, national_avg } }) => {
  return (
    <div className={"card text-center border-left"}>
      <p className={"text-dark lead"}>${regional}/hr</p>
      <p className={"text-dark"}>Median Hourly Earnings</p>
      <p>Nation: {national_avg}0/hr</p>
    </div>
  );
};

export default EarningsItem;
