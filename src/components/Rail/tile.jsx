import React from "react";
import Meta from "./meta";

const RailContainer = (props) => {
  return (
    <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img src={props.image} alt={props.title} />
      {props.meta ? <Meta title={props.title} label={props.label} /> : false}
    </div>
  );
};

export default RailContainer;
