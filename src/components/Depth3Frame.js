import Depth4Frame from "./Depth4Frame";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Depth3Frame.module.css";

const Depth3Frame = () => {
  const navigate = useNavigate();

  const handleLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <form className={styles.depth3Frame0}>
      <div className={styles.depth4Frame0}>
        <div className={styles.depth5Frame0}>
          <h2 className={styles.createYourAccount}>Create your account</h2>
        </div>
      </div>

      <Depth4Frame
        username="Username"
        depth9Frame0Placeholder="acmeadmin"
        propWidth="85.9px"
      />

      <Depth4Frame
        username="Email"
        depth9Frame0Placeholder="admin@acme.co"
        propWidth="120.6px"
      />

      <Depth4Frame
        username="Password"
        depth9Frame0Placeholder="**********"
        propWidth="63.1px"
      />

      <Depth4Frame
        username="Confirm password"
        depth9Frame0Placeholder="**********"
        propWidth="63.1px"
      />

      <Depth4Frame
        signUp="Sign up"
        propBackgroundColor="#1a80e6"
        propBackgroundColor1="#1a80e6"
        propColor="#fff"
      />
      <div className={styles.depth4Frame5}>
        <div className={styles.depth5Frame01}>
          <button className={styles.depth6Frame0}>
            <div className={styles.depth7Frame0}>
              <b className={styles.signUp}>Sign up</b>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.depth4Frame6}>
        <div className={styles.depth5Frame01}>
          <div className={styles.depth5Frame02}>
            <div className={styles.bySigningUp}>
              By signing up, you agree to our Terms of Use and Privacy Policy
            </div>
          </div>
        </div>
      </div>
      <div className={styles.depth4Frame7}>
        <div className={styles.depth5Frame02}>
          <div className={styles.depth5Frame03}>
            <div className={styles.alreadyHaveAn}>Already have an account?</div>
          </div>
          <Link className={styles.logInLink} to="/login" onClick={handleLoginClick}>
            <div className={styles.depth7Frame0}>
              <b className={styles.logIn}>Log in</b>
            </div>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Depth3Frame;