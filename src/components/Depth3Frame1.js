import { useCallback } from "react";
import Depth4Frame1 from "./Depth4Frame1";
import { useNavigate } from "react-router-dom";
import styles from "./Depth3Frame1.module.css";

const Depth3Frame1 = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <form className={styles.depth3Frame0}>
      <div className={styles.depth4Frame0}>
        <div className={styles.depth5Frame0}>
          <b className={styles.logIn}>Log in</b>
        </div>
      </div>
      <Depth4Frame1
        username="Username"
        depth9Frame0Placeholder="Enter your username"
      />
      <Depth4Frame1
        username="Password"
        depth9Frame0Placeholder="Enter your password"
      />
      <div className={styles.depth4Frame3}>
        <div className={styles.depth5Frame01}>
          <div className={styles.forgotPassword}>Forgot password?</div>
        </div>
      </div>
      <div className={styles.depth4Frame4}>
        <button className={styles.depth5Frame02}>
          <div className={styles.depth6Frame0}>
            <div className={styles.depth7Frame0}>
              <b className={styles.signIn}>Sign In</b>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.depth4Frame5}>
        <div className={styles.depth5Frame0}>
          <div className={styles.dontHaveAn}>Don't have an account?</div>
        </div>
      </div>
      <div className={styles.depth4Frame4}>
        <div className={styles.depth5Frame04}>
          <button className={styles.depth6Frame01}>
            <div className={styles.depth7Frame0}>
              <b className={styles.signUp} onClick={onSignUpTextClick}>
                Sign Up
              </b>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Depth3Frame1;
