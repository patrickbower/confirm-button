import React from "react";
import style from "./rail.module.css";
import Tile from "./tile";
import { Link } from "react-router-dom";
import { fetchRailData } from "./data/utils";

const RailContainer = (props) => {
  const content = fetchRailData(props.title);

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <div className="py-3">
      <h3 className="lg:pl-10 font-semibold ml-6 pb-1 text-28 sm:text-22">
        {props.title}
      </h3>
      <div className={style.railCont}>
        <div
          className={
            props.extend ? `${style.rail} ${style.railExtend}` : style.rail
          }
        >
          {content.map((data) => (
            <React.Fragment key={data.id}>
              <ConditionalWrapper
                condition={data.link}
                wrapper={(children) => (
                  <Link to={`${data.link}`}>{children}</Link>
                )}
              >
                <Tile
                  image={data.image}
                  title={data.title}
                  label={data.label}
                  meta={props.meta}
                />
              </ConditionalWrapper>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

RailContainer.defaultProps = {
  meta: true,
  extend: false,
};

export default RailContainer;
