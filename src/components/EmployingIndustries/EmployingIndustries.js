import React from "react";
import IndustriesHeader from "./IndustriesHeader";
import IndustryItems from "./IndustryItems";

const EmployingIndustries = ({ employingIndustries }) => {
  return (
    <div>
      <IndustriesHeader year={employingIndustries.year} />
      <IndustryItems industries={employingIndustries.industries} />
    </div>
  );
};

export default EmployingIndustries;
