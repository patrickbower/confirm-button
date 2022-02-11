import React, { useState, useRef } from "react";
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
        animate={{
          rotate: 360,
        }}
        onAnimationComplete={() => handleNextItemInSequence()}
        transition={{
          duration: 0.5,
          repeat: 3,
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
        animate={{
          pathLength: 1,
        }}
        onAnimationComplete={() => handleNextItemInSequence()}
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

  let [sequenceNum, setSequenceNum] = useState(0);
  let [sequenceName, setSequenceName] = useState("add");
  let [sequenceType, setSequenceType] = useState(sequences[sequenceName]);

  const sequenceNumRef = useRef();
  sequenceNumRef.current = sequenceNum;

  const handleNextItemInSequence = () => {
    const nextSequenceName = sequenceName === "add" ? "remove" : "add";
    if (sequenceNumRef.current === sequenceType.length - 1) {
      setSequenceName(nextSequenceName);
      setSequenceType(sequences[nextSequenceName]);
      setSequenceNum(0);
    } else {
      setSequenceNum(sequenceNumRef.current + 1);
    }

    console.log({ sequenceName, sequenceType, nextSequenceName, sequenceNum });
    console.log(sequenceNumRef.current);
  };

  const getContent = () => {
    return sequenceType[sequenceNumRef.current];
  };

  return (
    <div>
      <motion.button
        className={styles.button}
        onClick={handleNextItemInSequence}
      >
        {getContent()}
      </motion.button>
    </div>
  );
};

export default Button;
