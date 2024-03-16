import { useMemo } from "react";
import styles from "./Depth5Frame.module.css";

const Depth5Frame = ({ chalk, highStock, propLeft, propTop }) => {
  const depth8Frame0Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.depth5Frame0}>
      <div className={styles.depth6Frame0}>
        <div className={styles.depth7Frame0}>
          <input className={styles.logicGate} type="checkbox" />
          <div className={styles.depth8Frame0} style={depth8Frame0Style} />
        </div>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth6Frame0}>
            <b className={styles.chalk}>{chalk}</b>
          </div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.depth6Frame0}>
            <div className={styles.highStock}>{highStock}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
