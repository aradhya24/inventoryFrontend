import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Depth2Frame from "../components/Depth2Frame";
import Depth5Frame1 from "../components/Depth5Frame1";
import styles from "./InventoryManagement.module.css";

const InventoryManagement = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDepth6Frame0Click = useCallback(() => {
    //TODO: edit into departments
  }, []);

  return (
    <div className={styles.inventoryManagement}>
      <main className={styles.depth1Frame0}>
        <Depth2Frame
          vector0="/vector--0.svg"
          depth4Frame2="/depth-4-frame-2@2x.png"
          vector01="pending_2:649"
          vector1="pending_2:650"
          cseIotPensPencilsNotebookTop="-17.5px"
          cseIotPensPencilsNotebookLeft="-2473.2px"
          sIESGRADUATESCHOOLTop="-19.5px"
          sIESGRADUATESCHOOLLeft="-1379px"
          propPadding="var(--padding-4xs-8) 0px 0px"
          onDashboardTextClick={onDashboardTextClick}
        />
        <div className={styles.depth5Frame1} />
        <section className={styles.cseIoTPersonalSuppliesFraWrapper}>
          <div className={styles.cseIoTPersonalSuppliesFra}>
            <div className={styles.cseIoTPersonalSuppliesFra1}>
              <div className={styles.frameParent}>
                <div className={styles.depth5Frame0Wrapper}>
                  <div className={styles.depth5Frame0}>
                    <div className={styles.depth5Frame0}>
                      <div className={styles.depth5Frame0}>
                        <h1 className={styles.inventoryManagement1}>
                          Inventory Management
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.depth6Frame01}
                  onClick={onDepth6Frame0Click}
                >
                  <div className={styles.depth7Frame01}>
                    <div className={styles.depth8Frame0}>
                      <div className={styles.edit}>Edit</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.depth4Frame1Wrapper}>
              <div className={styles.depth4Frame1}>
                <div className={styles.depth8Frame0}>
                  <div className={styles.depth8Frame0}>
                    <h3 className={styles.departments}>Departments</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depth5Frame0Container}>
              <div className={styles.depth5Frame02}>
                <div className={styles.depth6Frame03}>
                  <div className={styles.depth7Frame02}>
                    <div className={styles.depth8Frame01}>
                      <img
                        className={styles.newarticleIcon}
                        alt=""
                        src="/vector--0-2.svg"
                      />
                      <div className={styles.depth9Frame0} />
                    </div>
                  </div>
                </div>
                <div className={styles.depth6Frame1}>
                  <div className={styles.depth7Frame03}>
                    <div className={styles.depth5Frame0}>
                      <div className={styles.computerScience}>
                        Computer Science
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth7Frame1}>
                    <div className={styles.depth5Frame0}>
                      <div className={styles.pens45Pencils}>
                        Pens: 45, Pencils: 50, Notebooks: 25, Erasers: 30
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cseIoTPersonalSuppliesFraInner}>
              <div className={styles.depth5Frame0Parent}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.depth7Frame02}>
                      <div className={styles.depth8Frame01}>
                        <img
                          className={styles.newarticleIcon}
                          alt=""
                          src="/vector--0-3.svg"
                        />
                        <div className={styles.depth9Frame01} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame03}>
                      <div className={styles.depth5Frame0}>
                        <div className={styles.informationTechnology}>
                          Information Technology
                        </div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth5Frame0}>
                        <div className={styles.pens30Pencils}>
                          Pens: 30, Pencils: 40, Notebooks: 20, Erasers: 25
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame04}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.depth7Frame02}>
                      <div className={styles.depth8Frame01}>
                        <img
                          className={styles.newarticleIcon}
                          alt=""
                          src="/vector--0-4.svg"
                        />
                        <div className={styles.depth9Frame02} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame03}>
                      <div className={styles.depth5Frame0}>
                        <div
                          className={styles.artificialIntelligenceMachin}
                        >{`Artificial Intelligence Machine Learning `}</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth5Frame0}>
                        <div className={styles.pens35Pencils}>
                          Pens: 35, Pencils: 45, Notebooks: 25, Erasers: 30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame05}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.depth7Frame02}>
                      <div className={styles.depth8Frame01}>
                        <img
                          className={styles.newarticleIcon}
                          alt=""
                          src="/vector--0-5.svg"
                        />
                        <div className={styles.depth9Frame03} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame03}>
                      <div className={styles.depth5Frame0}>
                        <div
                          className={styles.artificialIntelligenceAnd}
                        >{`Artificial Intelligence and Data Science `}</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth5Frame0}>
                        <div className={styles.pens40Pencils}>
                          Pens: 40, Pencils: 50, Notebooks: 30, Erasers: 35
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cseIotPens}>
                  <div className={styles.depth5Frame04}>
                    <div className={styles.depth6Frame03}>
                      <div className={styles.depth7Frame02}>
                        <div className={styles.depth8Frame01}>
                          <img className={styles.newarticleIcon} alt="" />
                          <div className={styles.depth9Frame04} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.depth6Frame1}>
                      <div className={styles.depth7Frame03}>
                        <div className={styles.depth5Frame0}>
                          <div className={styles.cseIot}>Cse IOT</div>
                        </div>
                      </div>
                      <div className={styles.depth7Frame1}>
                        <div className={styles.depth5Frame0}>
                          <div className={styles.pens35Pencils}>
                            Pens: 40, Pencils: 45, Notebooks: 20, Erasers: 25
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.depthFramesStack}>
                    <Depth5Frame1
                      vector0="/vector--0-3.svg"
                      mechanical="Mechanical "
                      propPadding="var(--padding-2xs) 208.0999999999999px var(--padding-2xs) 0px"
                      propTop="-599.5px"
                    />
                    <Depth5Frame1
                      vector0="/vector--0-3.svg"
                      mechanical="Electronics and Telecommunication "
                      propPadding="var(--padding-2xs) 208.0999999999999px var(--padding-2xs) 0px"
                      propTop="-670px"
                      propWidth="346px"
                    />
                    <Depth5Frame1
                      vector0="/vector--0-3.svg"
                      mechanical="Electronics and computer science "
                      propPadding="var(--padding-3xs-5) 208.0999999999999px var(--padding-3xs-5) 0px"
                      propTop="-738.5px"
                      propWidth="346px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InventoryManagement;
