import React from "react";

const Title = ({ occupation, region }) => {
  return (
    <div>
      <h1>Occupation Overview</h1>
      <p>{`${occupation.title} in ${region.title}`}</p>
    </div>
  );
};

export default Title;
