import React from "react";

const Meta = (props) => {
  return (
    <React.Fragment>
      <p className="pt-1 font-semibold sm:text-16">{props.title}</p>
      <p className="pt-1.5 text-xs text-iron sm:text-14">{props.label}</p>
    </React.Fragment>
  );
};

export default Meta;
