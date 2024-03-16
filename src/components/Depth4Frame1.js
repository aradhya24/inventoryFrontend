import React, { useState, useMemo } from "react";
import styles from "./Depth4Frame1.module.css";

const Depth4Frame1 = ({ username, depth9Frame0Placeholder, propWidth }) => {
  const [depth9Frame0Value, setDepth9Frame0Value] = useState("");
  const depth9Frame0Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.depth4Frame1}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <div className={styles.username}>{username}</div>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.depth8Frame0}>
              <input
                className={styles.depth9Frame0}
                placeholder={depth9Frame0Placeholder}
                type="text"
                value={depth9Frame0Value}
                onChange={(event) => setDepth9Frame0Value(event.target.value)}
                style={depth9Frame0Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;