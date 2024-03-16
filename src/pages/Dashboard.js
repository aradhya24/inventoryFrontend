import Navbar from "../components/Navbar";
import Depth5Frame from "../components/Depth5Frame";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.body}>
              <div className={styles.headingH1}>
                <div className={styles.headingName}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.depth6Frame0}>
                      <h1 className={styles.inventory}>Inventory</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bodyNav}>
                <div className={styles.bodyNavBody}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.overview}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <button className={styles.overview1} autoFocus={true}>
                            Overview
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className={styles.chalk}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <button className={styles.chalk1} autoFocus={true}>
                            Chalk
                          </button>
                        </div>
                      </div>
                    </button>
                    <button className={styles.chalk}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <b className={styles.duster1}>Duster</b>
                        </div>
                      </div>
                    </button>
                    <button className={styles.chalk}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <b className={styles.markers}>Markers</b>
                        </div>
                      </div>
                    </button>
                    <div className={styles.overview}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <button
                            className={styles.whiteboard1}
                            autoFocus={true}
                          >
                            Whiteboard
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.overview}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <button className={styles.papers1}>Papers</button>
                        </div>
                      </div>
                    </div>
                    <button className={styles.chalk}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <b className={styles.ink1}>Ink</b>
                        </div>
                      </div>
                    </button>
                    <div className={styles.overview}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth8Frame0}>
                          <button className={styles.others1} autoFocus={true}>
                            Others
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.headingH2}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <b className={styles.summary}>Summary</b>
                  </div>
                </div>
              </div>
              <div className={styles.headingH2}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <h3 className={styles.lowStockAlerts}>Low stock alerts</h3>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame5}>
                <div className={styles.depth5Frame02}>
                  <img
                    className={styles.depth6Frame04}
                    loading="lazy"
                    alt=""
                    src="/depth-6-frame-0@2x.png"
                  />
                  <div className={styles.depth6Frame2}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.depth6Frame0}>
                        <div className={styles.duster2}>Duster</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth6Frame0}>
                        <div className={styles.unitsLeft}>2 units left</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.descendantFourTimes}>$200</div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame6}>
                <div className={styles.depth5Frame03}>
                  <img
                    className={styles.depth6Frame06}
                    alt=""
                    src="/depth-6-frame-0-1@2x.png"
                  />
                  <div className={styles.depth6Frame21}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.depth6Frame0}>
                        <div className={styles.ink2}>Ink</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame11}>
                      <div className={styles.depth8Frame011}>
                        <div className={styles.unitsLeft1}>3 units left</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.descendantFourTimes}>$250</div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame7}>
                <div className={styles.depth5Frame04}>
                  <img
                    className={styles.depth6Frame08}
                    alt=""
                    src="/depth-6-frame-0-2@2x.png"
                  />
                  <div className={styles.depth6Frame22}>
                    <div className={styles.depth7Frame03}>
                      <div className={styles.depth6Frame0}>
                        <div className={styles.others2}>Others</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame11}>
                      <div className={styles.depth8Frame011}>
                        <div className={styles.unitLeft}>1 unit left</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth8Frame011}>
                  <div className={styles.depth8Frame011}>
                    <div className={styles.div1}>$100</div>
                  </div>
                </div>
              </div>
              <div className={styles.inventoryItems}>
                <div className={styles.uncleSixTimesRemovedNodes}>
                  <Depth5Frame
                    chalk="Chalk"
                    highStock="High stock"
                    propLeft="-187px"
                    propTop="-586px"
                  />
                  <Depth5Frame
                    chalk="Duster"
                    highStock="Low stock"
                    propLeft="-375px"
                    propTop="-586px"
                  />
                  <Depth5Frame
                    chalk="Markers"
                    highStock="High stock"
                    propLeft="-563px"
                    propTop="-586px"
                  />
                  <Depth5Frame
                    chalk="Whiteboard"
                    highStock="High stock"
                    propLeft="-751px"
                    propTop="-586px"
                  />
                  <Depth5Frame
                    chalk="Papers"
                    highStock="High stock"
                    propLeft="-939px"
                    propTop="-586px"
                  />
                </div>
                <div className={styles.uncleSixTimesRemovedNodes1}>
                  <Depth5Frame
                    chalk="Ink"
                    highStock="Low stock"
                    propLeft="-187px"
                    propTop="-713px"
                  />
                  <Depth5Frame
                    chalk="Others"
                    highStock="High stock"
                    propLeft="-563px"
                    propTop="-713px"
                  />
                  <div className={styles.total}>
                    <div className={styles.depth6Frame0}>
                      <div className={styles.depth7Frame04}>
                        <input className={styles.vector0} type="checkbox" />
                        <div className={styles.depth8Frame014} />
                      </div>
                    </div>
                    <div className={styles.depth6Frame1}>
                      <div className={styles.depth6Frame0}>
                        <div className={styles.depth6Frame0}>
                          <b className={styles.total1}>Total</b>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;
