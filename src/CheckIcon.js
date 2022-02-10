import { motion } from "framer-motion";

const CheckIcon = (props) => {
  const { className, ...pathProps } = props;

  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1 9.72727L6.81818 17L19.9091 1"
        stroke="#0C161C"
        stroke-width="2.5"
        {...pathProps}
      />
    </svg>
  );
};

export default CheckIcon;
