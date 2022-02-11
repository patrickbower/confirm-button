import React, { useState, useRef } from "react";
import styles from "./Button.module.css";
import SpinnerIcon from "./SpinnerIcon";
import CheckIcon from "./CheckIcon";
import { motion } from "framer-motion";

const Button = () => {
  const buttonRef = useRef(null);

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
        onAnimationComplete={() => buttonRef.current.click()}
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
        initial={false}
        animate={{
          pathLength: [0, 1, 1],
        }}
        onAnimationComplete={() => buttonRef.current.click()}
        transition={{
          duration: 1,
          // times: [0, 0.2, 1],
          ease: "easeOut",
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

  // const sequenceNumRef = useRef();
  // sequenceNum = sequenceNum;

  const handleNextItemInSequence = () => {
    const nextSequenceName = sequenceName === "add" ? "remove" : "add";
    if (sequenceNum === sequenceType.length - 1) {
      console.log("end of sequence");
      setSequenceName(nextSequenceName);
      setSequenceType(sequences[nextSequenceName]);
      setSequenceNum(0);
    } else {
      console.log("next item in sequence");
      setSequenceNum(sequenceNum + 1);
    }

    console.log({ sequenceName, sequenceType, nextSequenceName, sequenceNum });
  };

  const getContent = () => {
    return sequenceType[sequenceNum];
  };

  return (
    <div>
      <motion.button
        className={styles.button}
        ref={buttonRef}
        onClick={handleNextItemInSequence}
      >
        {getContent()}
      </motion.button>
    </div>
  );
};

export default Button;
