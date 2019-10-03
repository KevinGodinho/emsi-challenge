import React from "react";

const EarningsItem = ({ earnings }) => {
  return (
    <div className={"card text-center border-left"}>
      <p className={"text-dark"}>${earnings.regional}/hr</p>
      <p className={"text-dark"}>Median Hourly Earnings</p>
      <p>Nation: {earnings.national_avg}0/hr</p>
    </div>
  );
};

export default EarningsItem;
