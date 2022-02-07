import railsData from "./index";

const fetchRailData = (rail_title) => {
  const maxItems = 10;
  return railsData
    .filter((item) => item.rail_title === rail_title)
    .slice(0, maxItems);
};

export { fetchRailData };
