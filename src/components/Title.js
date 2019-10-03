import React from "react";

const Title = ({ occupationTitle, regionTitle }) => {
  return (
    <div>
      <h1>Occupation Overview</h1>
      <p>{`${occupationTitle} in ${regionTitle}`}</p>
    </div>
  );
};

export default Title;
