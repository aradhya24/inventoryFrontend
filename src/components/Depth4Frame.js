
import { useState, useMemo } from "react";
import styles from "./Depth4Frame.module.css";

const Depth4Frame = ({
  signUp,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  signUpDisplay,
  username,
  depth9Frame0Placeholder,
  propWidth,
}) => {
  const depth5Frame0Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth,
    };
  }, [propBackgroundColor, propWidth]);

  const depth6Frame0Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const signUpStyle = useMemo(() => {
    return {
      color: propColor,
      display: signUpDisplay,
    };
  }, [propColor, signUpDisplay]);

  const [depth9Frame0Value, setDepth9Frame0Value] = useState("");

  return (
    <div className={styles.depth4Frame5}>
      <div className={styles.depth5Frame0} style={depth5Frame0Style}>
        <button className={styles.depth6Frame0} style={depth6Frame0Style}></button>

        <div className={styles.depth4Frame1}>
          <div className={styles.depth5Frame0}>
            <div className={styles.depth6Frame0}>
              <div className={styles.depth7Frame0}>
                <b className={styles.signUp} style={signUpStyle}>
                  {signUp}
                </b>
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
      </div>
    </div>
  );
};

export default Depth4Frame;