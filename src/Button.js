import React, { useState } from "react";
import styles from "./Button.module.css";
import SpinnerIcon from "./SpinnerIcon";
import CheckIcon from "./CheckIcon";
import { motion } from "framer-motion";

const Button = () => {
  const Add = <motion.span>Add to package</motion.span>;
  const Pending = (
    <motion.span className={styles.contents}>
      <span className={styles.spacer}>Add to package</span>
      <SpinnerIcon
        className={styles.icon}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.span>
  );
  const Success = (
    <motion.span className={styles.contents}>
      <span className={styles.spacer}>Add to package</span>
      <CheckIcon
        className={styles.icon}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.span>
  );
  const Remove = <motion.span>Remove from package</motion.span>;

  const sequences = {
    add: [Add, Pending, Success],
    remove: [Remove, Pending],
  };

  const [sequenceName, setSequenceName] = useState("add");
  const [sequenceType, setSequenceType] = useState(sequences[sequenceName]);
  const [sequenceNum, setSequenceNum] = useState(0);

  const getContent = () => {
    return sequenceType[sequenceNum];
  };

  const handleClick = () => {
    const nextSequenceName = sequenceName === "add" ? "remove" : "add";
    if (sequenceNum === sequenceType.length - 1) {
      setSequenceName(nextSequenceName);
      setSequenceType(sequences[nextSequenceName]);
      setSequenceNum(0);
    } else {
      setSequenceNum(sequenceNum + 1);
    }
    // console.log({ sequenceName, sequenceType, sequenceNum, nextSequenceName });
  };

  return (
    <div>
      <motion.button className={styles.button} onClick={handleClick}>
        {getContent()}
      </motion.button>
    </div>
  );
};

export default Button;
