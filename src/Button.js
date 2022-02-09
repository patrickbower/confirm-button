import styles from "./Button.module.css";

function Button() {
  return (
    <div style={{ background: "#0c161c", padding: "20px", height: "100vh" }}>
      <button className={styles.button}>Add to package</button>
    </div>
  );
}

export default Button;
