import React from "react";
import { motion } from "framer-motion";

const SpinnerIcon = (props) => {
  const { ...svgProps } = props;

  return (
    <motion.svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M13.1212 1C6.42686 1 1 6.37258 1 13C1 19.6274 6.42686 25 13.1212 25C18.9854 25 23.8769 20.8774 25 15.4H22.5127C21.4362 19.5405 17.6396 22.6 13.1212 22.6C7.76573 22.6 3.42424 18.3019 3.42424 13C3.42424 7.69807 7.76573 3.4 13.1212 3.4L13.1212 1Z"
        fill="#0C161C"
      />
    </motion.svg>
  );
};

export default SpinnerIcon;
