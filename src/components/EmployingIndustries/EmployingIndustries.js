import React from "react";
import IndustriesHeader from "./IndustriesHeader";
import IndustryItems from "./IndustryItems";

const EmployingIndustries = ({ employingIndustries, getIndustryPercent }) => {
  const { year } = employingIndustries;
  return (
    <div>
      <IndustriesHeader year={year} />
      <IndustryItems
        employingIndustries={employingIndustries}
        getIndustryPercent={getIndustryPercent}
      />
    </div>
  );
};

export default EmployingIndustries;
