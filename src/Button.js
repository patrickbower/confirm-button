import React, { useState } from "react";
import styles from "./Button.module.css";
import SpinnerIcon from "./SpinnerIcon";
import CheckIcon from "./CheckIcon";
import { motion } from "framer-motion";

const Button = () => {
  const [addedToPackage, setAddedToPackage] = useState(false);

  // const handleButtonContent = () => {
  //   return addedToPackage ? "Remove" : "Add to package";
  // };

  // const handleButtonIcons = () => {
  //   return addedToPackage ? <Check /> : <Spinner />;
  // };

  const handleClick = () => {
    setAddedToPackage(!addedToPackage);
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        Add to package
      </button>
      <button className={styles.button} onClick={handleClick}>
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
      </button>
      <button className={styles.button} onClick={handleClick}>
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
      </button>
      <button className={styles.button} onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};

export default Button;
