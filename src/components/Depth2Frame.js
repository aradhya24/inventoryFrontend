
import { useMemo } from "react";


import styles from "./Depth2Frame.module.css";


const Depth2Frame = () => {

  const Depth2Frame = ({
  vector0,
  depth4Frame2,
  vector01,
  vector1,
  cseIotPensPencilsNotebookTop,
  cseIotPensPencilsNotebookLeft,
  sIESGRADUATESCHOOLTop,
  sIESGRADUATESCHOOLLeft,
  propPadding,
  dashboardTextDecoration,
  inventoryTextDecoration,
  onDashboardTextClick,
  onInventoryTextClick,
}) => {
  const depth8Frame01Style = useMemo(() => {
    return {
      top: cseIotPensPencilsNotebookTop,
      left: cseIotPensPencilsNotebookLeft,
    };
  }, [cseIotPensPencilsNotebookTop, cseIotPensPencilsNotebookLeft]);

  const depth8Frame02Style = useMemo(() => {
    return {
      top: sIESGRADUATESCHOOLTop,
      left: sIESGRADUATESCHOOLLeft,
    };
  }, [sIESGRADUATESCHOOLTop, sIESGRADUATESCHOOLLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dashboardStyle = useMemo(() => {
    return {
      textDecoration: dashboardTextDecoration,
    };
  }, [dashboardTextDecoration]);

  const inventoryStyle = useMemo(() => {
    return {
      textDecoration: inventoryTextDecoration,
    };
  }, [inventoryTextDecoration]);



  return (
    <header className={styles.depth2Frame0}>
      <div className={styles.depth3Frame1}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame2} />
          <div className={styles.depth5Frame0}>
            <div className={styles.depth5Frame0}>

              <div className={styles.dashboard}>Dashboard</div>

              <div
                className={styles.dashboard}
                onClick={onDashboardTextClick}
                style={dashboardStyle}
              >
                Dashboard
              </div>


            </div>
          </div>
          <div className={styles.depth5Frame1}>
            <div className={styles.depth6Frame01}>

              <div className={styles.inventory}>Inventory</div>

              <div
                className={styles.inventory}
                style={inventoryStyle}
                onClick={onInventoryTextClick}
              >
                Inventory
              </div>


            </div>
          </div>
          <div className={styles.depth5Frame0}>
            <div className={styles.depth5Frame0}>
              <div className={styles.profile}>Profile</div>
            </div>
          </div>
        </div>
        <div className={styles.depth4Frame1}>
          <div className={styles.depth5Frame01}>
            <div className={styles.depth5Frame0}>
              <div className={styles.depth7Frame0}>
                <img
                  className={styles.vector0}
                  loading="lazy"
                  alt=""
                  src="/vector--0.svg"

                  src2={vector0}

                />
                <div className={styles.depth8Frame0} />

                <div
                  className={styles.depth8Frame0}
                  style={depth8Frame01Style}
                />

              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.depth4Frame2}
          loading="lazy"
          alt=""
          src="/depth-4-frame-2@2x.png"

          src1={depth4Frame2}

        />
      </div>
      <div className={styles.vectorVectorFrame}>

      <div className={styles.cseIotPensPencilsNotebooks}>

        <div className={styles.depth6Frame04}>
          <img className={styles.vector01} alt="" />
          <img className={styles.vector1} alt="" />
          <div className={styles.depth8Frame01} />
          <img className={styles.vector01} alt="" src={vector01} />
          <img className={styles.vector1} loading="lazy" alt="" src={vector1} />
          <div className={styles.depth8Frame01} style={depth8Frame02Style} />

        </div>
      </div>
      </div>

      <div className={styles.textFrame}>

      <div
        className={styles.siesGraduateSchoolOfTechnoWrapper}
        style={frameDivStyle}
      >


        <b
          className={styles.siesGraduateSchool}
        >{`SIES GRADUATE SCHOOL OF TECHNOLOGY `}</b>
      </div>
      </div>
    </header>
  );
};
};
export default Depth2Frame;
