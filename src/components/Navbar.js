import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onInventoryTextClick = useCallback(() => {
    navigate("/inventory-management");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <div className={styles.depth3Frame1}>
        <div className={styles.depth6Frame0}>
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <div className={styles.depth6Frame01}>
          <div className={styles.inventory} onClick={onInventoryTextClick}>
            Inventory
          </div>
        </div>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame2} />
          <div className={styles.depth5Frame0} />
          <div className={styles.depth5Frame1} />
          <div className={styles.depth5Frame3}>
            <div className={styles.depth6Frame0}>
              <div className={styles.profile} onClick={onProfileTextClick}>
                Profile
              </div>
            </div>
          </div>
        </div>
        <img className={styles.depth4Frame2} loading="lazy" alt="" />
      </div>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame01}>
          <div className={styles.depth5Frame01} />
          <div className={styles.depth5Frame11}>
            <div className={styles.depth6Frame03}>
              <b
                className={styles.siesGraduateSchool}
              >{`SIES GRADUATE SCHOOL OF TECHNOLOGY `}</b>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
