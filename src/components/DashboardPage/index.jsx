import Aos from "aos";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import card2 from "../../assets/img/Mask_Group-1.png";
import ban from "../../assets/img/earth-core-structure.png";
import acrossGlobe from "../../assets/img/homePageBottomleft.png";
import card1 from "../../assets/img/homePageMiddleLeft.png";
import rightimg from "../../assets/img/homePageTopRight.png";
import Loader from "../layout/loader";
import BannerContatctUs from "./BannerContactUs";

const DashboardPage = ({ onLearnMore, onLets }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  const LearnMore = () => {
    return navigate("/about-us");
  };
  const lets = () => {
    return navigate("/contact/us");
  };

  return (
    <>
      <Loader />
      <BannerContatctUs onLearnMore={LearnMore} onLets={lets} />
      <div className="main-body">
        <div className="future-text-wrap">
          <div className="banner_head">
            <div className="row text-center banner_head_text">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="100"
                className="col20"
              >
                <div className="title_ ">
                  <h5> </h5>
                  <p> </p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="100"
                className="col20"
              >
                <div className="title_ ">
                  <h5>2.9 GW</h5>
                  <p>TEXAS, USA</p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="500"
                className="col20"
              >
                <div className="title_ ">
                  <h5>80 MW</h5>
                  <p>LOUISIANA, USA</p>
                </div>
              </div>
              {/* <div
                data-aos-duration='700'
                data-aos='fade-up'
                data-aos-delay='200'
                className='col20'
              >
                <div className='title_ '>
                  <h5>100 MW</h5>
                  <p>UTTAR PRADESH, INDIA</p>
                </div>
              </div> */}
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="300"
                className="col20"
              >
                <div className="title_ ">
                  <h5>100 MW</h5>
                  <p>INDIA</p>
                </div>
              </div>
              {/* <div
                data-aos-duration='700'
                data-aos='fade-up'
                data-aos-delay='400'
                className='col20'
              >
                <div className='title_ '>
                  <h5>150 MW</h5>
                  <p>Hungary</p>
                </div>
              </div> */}
            </div>

            <div className="row gx-5 gy-5 future-statement">
              <div className="col-xl-6 col-sm-12 col-12 d-flex align-items-center">
                <div className="text_right">
                  <h5
                    data-aos-duration="700"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  >
                    Pioneering a Greener Future with Renewable Energy
                  </h5>
                  <p
                    data-aos-duration="700"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    className="mt-2 mb-2"
                  >
                    Geothermal (or Geothermal™) is a full-cycle operations and
                    energy production company providing large scale baseload
                    power solutions, on and off the grid. With offices
                    conveniently located near Houston Texas, our initial mission
                    at Geothermal is the successful deployment of geothermal
                    power plants within Texas and along the interior Gulf Coast
                    region where geothermal resources are proven by vintage oil
                    / gas wells and 3-D seismic.
                  </p>
                  <div className="home-text-box">
                    <p>
                      At Geothermal, we're not just producing energy - we're
                      revolutionizing a sustainable future.
                    </p>
                  </div>
                  <br /> <br />
                  <a onClick={() => navigate("about/")} className="learn-more">
                    {" "}
                    Know more
                  </a>
                </div>
              </div>

              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <div className="d-flex justify-content-end">
                    <img src={rightimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos-duration="700"
            data-aos="fade-up"
            data-aos-delay="1000"
            className="banner_head"
          >
            <div className="row mt-5">
              <div className="col-12 relative">
                <img src={ban} alt="" className="banner-dashboard"></img>
                <div className="developing-banner">
                  <h3 className="seperator-banner-text">
                    Developing the future of renewable energy by harnessing the
                    heat from within the earth’s core
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-focus">
          <div>
            <div className="banner_head mb-5">
              <div className="row">
                <div className="col-12">
                  <div className="tech_">
                    <div className="text-center">
                      <span className="title_1">TECHNOLOGY</span>
                      <h6 className="title_2">
                        With Geo 3D seismic technology and Organic Rankine Cycle
                        turbines combine for efficient geothermal power
                        production in sedimentary geology.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gy-5 mt-1 mb-5">
                <div className="col-md-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-left"
                    className="card h-100"
                  >
                    <img src={card2} alt="..." className="technology-img" />
                    <div className="card-body card__">
                      <h5 className="card-title text-left">Technology</h5>
                      <p className="card-text  focus-text">
                        Bringing together seismic geomechanics technology that
                        measures in-situ 3D minimum horizontal stress which is
                        the key rock parameter that governs hydraulic fracture
                        stimulation of tight geologic formations, not only for
                        enhanced energy production, but for controlled fracture
                        design and minimal footprint.
                      </p>
                      <span onClick={() => navigate("technology/scicat")}>
                        {" "}
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-right"
                    className="card h-100"
                  >
                    <img src={card1} alt="..." />
                    <div className="card-body card__">
                      <h5 className="card-title text-left">
                        Organic Rankine Cycle (ORC) Plant
                      </h5>

                      <p className="card-text text-left focus-text">
                        GT Himalia uses state-of-the-art compact Organic Rankine
                        Cycle (ORC) geothermal power plants that optimize
                        low-temperature geothermal resources for maximum power
                        production and 98% uptime efficiency.
                      </p>
                      <span onClick={() => navigate("technology/orc")}>
                        {" "}
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="power-generation-info-wrap">
          <div className="box_content">
            <div className="row power-numbering">
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="600"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>30+</h1>
                  <p>Years</p>
                </div>

                <div className="title_3">Geothermal Plant Lifetime</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="500"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>24/7</h1>
                  <p>Baseload Power</p>
                </div>
                <div className="title_3">Dispatchable</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="400"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>1%</h1>
                  <p>Solar</p>
                </div>
                <div className="title_3">Surface Footprint​</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="300"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>98%</h1>
                </div>
                <div className="title_3">Plant Run Time</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="200"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>1°</h1>
                  <p>per decade</p>
                </div>
                <div className="title_3">Energy Decline Rate​</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="100"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>~$.03</h1>
                </div>
                <div className="title_3">Levelized Cost Of Energy (ICOE)​</div>
              </div>
            </div>
            <div className="row gx-4 gy-5">
              <div
                data-aos-duration="700"
                data-aos="fade-right"
                className="col-xl-6 col-sm-12 col-12"
              >
                <div className="">
                  <img
                    src={acrossGlobe}
                    className="bottom-dashbord-img"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 col-12 d-flex align-items-center">
                <div
                  data-aos-duration="700"
                  data-aos="fade-left"
                  className="title_4 d-grid"
                >
                  <h3>Developing geothermal power across the globe.</h3>
                  <p>
                    The technical team at GT Titan consists of subject matter
                    experts with over 230 years of combined oil and gas
                    operations experience, which includes supply chain experts,
                    PPA electricity experts, drilling and reservoir engineers,
                    and finance. Moreover, PhD geoscience researchers are
                    currently analyzing the most suitable locations to deploy
                    Organic Rankine Cycle geothermal power plants at basins
                    within Texas, the United States, and at numerous locations
                    around the globe where geothermal resources are proven by
                    mature oil and gas provinces and subsequent data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
