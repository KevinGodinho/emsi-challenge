import React from "react";

const IndustriesHeader = ({ year }) => {
  return (
    <div>
      <h3 className={"my-1 text-dark border-bottom"}>
        Industries Employing Computer Programmers
      </h3>
      <div className={"navbar border-bottom"}>
        <p className={"text-dark"}>Industry</p>
        <div className={"grid-3-gap"}>
          <p className={"text-dark"}>Occupation Jobs in Industry ({year})</p>
          <p className={"text-dark"}>% of Occupation in Industry ({year})</p>
          <p className={"text-dark"}>% of Total Jobs in Industry ({year})</p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeader;
