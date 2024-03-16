
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


import Depth2Frame from "../components/Depth2Frame";
import Depth3Frame from "../components/Depth3Frame";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInventoryTextClick = useCallback(() => {
    navigate("/inventory-management");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <main className={styles.depth0Frame0}>

        <Depth2Frame />
        <Depth2Frame
          vector0="/vector--0.svg"
          depth4Frame2="/depth-4-frame-2@2x.png"
          vector01="pending_3:787"
          vector1="pending_3:788"
          cseIotPensPencilsNotebookTop="-902.5px"
          cseIotPensPencilsNotebookLeft="-2473.2px"
          sIESGRADUATESCHOOLTop="-904.5px"
          sIESGRADUATESCHOOLLeft="-1379px"
          propPadding="8.799999999999955px 0px 0px"
          dashboardTextDecoration="none"
          inventoryTextDecoration="none"
          onDashboardTextClick={onDashboardTextClick}
          onInventoryTextClick={onInventoryTextClick}
        />

        <section className={styles.depth2Frame1}>
          <Depth3Frame />
        </section>
      </main>
    </div>
  );
};

export default Signup;
