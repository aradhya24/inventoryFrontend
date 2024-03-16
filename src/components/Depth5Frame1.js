import { useMemo } from "react";
import styles from "./Depth5Frame1.module.css";

const Depth5Frame1 = ({
  vector0,
  mechanical,
  propPadding,
  propTop,
  propWidth,
}) => {
  const depth5Frame0Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const depth9Frame01Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const mechanicalStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.depth5Frame0} style={depth5Frame0Style}>
      <div className={styles.depth6Frame0}>
        <div className={styles.depth7Frame0}>
          <div className={styles.depth8Frame0}>
            <img className={styles.vector0} alt="" src={vector0} />
            <div className={styles.depth9Frame0} style={depth9Frame01Style} />
          </div>
        </div>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame01}>
          <div className={styles.depth8Frame01}>
            <div className={styles.mechanical} style={mechanicalStyle}>
              {mechanical}
            </div>
          </div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.depth8Frame01}>
            <div className={styles.pens30Pencils}>
              Pens: 30, Pencils: 40, Notebooks: 20, Erasers: 25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame1;
