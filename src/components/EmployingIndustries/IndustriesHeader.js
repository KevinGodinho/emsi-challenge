import React from "react";

const IndustriesHeader = ({ year }) => {
  return (
    <div>
      <h3 className={"my-1 text-dark border-bottom"}>
        Industries Employing Computer Programmers
      </h3>
      <div className={"navbar-no-pad border-bottom py-top"}>
        <p className={"text-dark py-1-left"}>Industry</p>
        <div className={"grid-3-gap text-right"}>
          <p className={"text-dark"}>
            Occupation Jobs in Industry <p>({year})</p>
          </p>
          <p className={"text-dark"}>
            % of Occupation in Industry <p>({year})</p>
          </p>
          <p className={"text-dark"}>
            % of Total Jobs <p>in Industry</p>
            <p>({year})</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeader;
