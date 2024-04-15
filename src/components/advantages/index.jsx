import React from "react";
// import {Link} from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import card2 from "../../assets/img/Mask_Group-1.png";
import card1 from "../../assets/img/comp-2.png";
import acrossGlobe from "../../assets/img/compitativeAdvantageBottomImage.png";
import InnerBanner from "../innerBanner";

import { useNavigate } from "react-router-dom";
import leftImage from "../../assets/img/AboutUsLeft.png";
import advantages_banner from "../../assets/img/compitativeAdvantageRightTop.png";
import advanBanner from "../../assets/img/compotetiveBanner.png";
import growth from "../../assets/img/growth.png";
import Loader from "../layout/loader";

const Advantages = () => {
  const navigate = useNavigate();
  return (
    <>
      <Loader />
      <div className="advantages-wrap">
        <InnerBanner
          data-aos-duration="700"
          data-aos="fade-up"
          data-aos-delay="1000"
          title="WHY US"
          image={advanBanner}
        />
        <div className="row page-heading-wrap">
          <div className="cal-12">
            <p
              data-aos-duration="700"
              data-aos="fade-left"
              data-aos-delay="1000"
              className="text pt-5"
            >
              India has the third largest demand of energy in the world. As per
              government statistics, India’s energy need is around 225 GW in
              2023, about 12% of that is from renewable sources. This demand is
              expected to be doubled in next 20 years. The contribution from
              Geothermal Resources in renewable sources is negligible in India.
              However, early findings in research conducted by the Government
              see Geothermal potential to the tune of 10 GW. With more research
              and exploration, this potential will grow further.
            </p>
          </div>
          <div className="top-advantage-section">
            <div className="row">
              <div className="col-lg-7 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <p className="text ">
                    At GT Himalia, we bring in the expertise from the US Parent
                    Geothermal Holdings. United State which is currently the
                    world leader in geothermal power. Our operating advantages
                    drive reduced project time frames, upfront capital, and
                    costs, which accelerates first power and cash flows.
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="1000"
                className="col-lg-5 col-sm-12 col-12 d-flex justify-content-end"
              >
                <img src={advantages_banner} className="w-75" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-focus mt-5 pb-5">
          <div className="">
            <div className="banner_head">
              <div className="row">
                <div className="col-12">
                  <div className="tech_">
                    <div className="text-center">
                      <span className="title_1">TECHNOLOGY WE FOCUS IN</span>
                      <h6
                        data-aos-duration="700"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        className="com-title"
                      >
                        Geothermal Operating Advantages
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6 col-sm-12 col-12">
                  <div className="card h-100">
                    <img
                      data-aos-duration="700"
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      src={card1}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body card__">
                      <h5
                        data-aos-duration="700"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        className="card-title text-left"
                      >
                        Organic Rankine Cycle (ORC) Plant
                      </h5>

                      <p className="card-text text-left focus-text">
                        GT Himalia uses state-of-the-art compact Organic Rankine
                        Cycle (ORC) geothermal power plants that optimize
                        low-temperature geothermal resources for maximum power
                        production and 98% uptime efficiency.
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => navigate("/technology/orc")}
                      >
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 mt-4 mt-md-0">
                  <div className="card h-100">
                    <img
                      className="card-img-top technology-img"
                      data-aos-duration="700"
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      src={card2}
                      alt="..."
                    />
                    <div className="card-body card__">
                      <h5
                        data-aos-duration="700"
                        data-aos="fade-left"
                        data-aos-delay="1000"
                        className="card-title text-left"
                      >
                        Technology
                      </h5>
                      <p className="card-text  focus-text">
                        Technology power plants transfer the heat from
                        geothermal hot water to another liquid. It represents
                        3-d seismic technology for enhanced geothermal systems
                        and maximum production
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => navigate("/technology/scicat")}
                      >
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

        <div className="bg-white advantages-sec">
          <div className="">
            <div className="box_content">
              <div className="row">
                {/* <div className="col-1" /> */}
                <div className="col-xl-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-out"
                    data-aos-delay="800"
                    className="title_4"
                  >
                    <h4>A Growing, Long-term Opportunity Set.</h4>
                    <p>
                      The technical team at GT Himalia consists of subject
                      matter experts with over 230 years of combined oil and gas
                      operations experience, which includes supply chain
                      experts, PPA electricity experts, drilling and reservoir
                      engineers, and finance. Moreover, PhD geoscience
                      researchers are currently analyzing the most suitable
                      locations to deploy Organic Rankine Cycle geothermal power
                      plants at basins within Texas, the United States, and at
                      numerous locations around the globe where geothermal
                      resources are proven by mature oil and gas provinces and
                      subsequent data.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className=" d-flex justify-content-end"
                  >
                    <img className="w-75" src={acrossGlobe} alt=""></img>
                  </div>
                </div>
                {/* <div className="col-1" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="middle_section_advantages">
          <div className="">
            <div className="row">
              <div
                data-aos-duration="700"
                data-aos="fade-left"
                className="col-xl-6 col-sm-12 col-12"
              >
                <img src={leftImage} alt="" className="w-75"></img>
              </div>
              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  className="text_area_"
                >
                  <h3>
                    Smallest surface footprint of any power source per MW
                    installed capacity
                  </h3>
                  <p>
                    GT Himalia is very conscious of carbon emissions, climate,
                    and cultural values and continues to address and execute
                    effective environmental, social, and governance (ESG)
                    criteria using modern technology to mitigate and decelerate
                    said environmental effects, while minimizing its carbon and
                    environmental footprint, and any surface degradation, unlike
                    solar and wind.
                  </p>
                  <div className="leftborder_">
                    <p>
                      {/* <span className=""></span> */}
                      Geothermal power plants emit about 99 percent less carbon
                      dioxide than fossil fuel power plants of similar size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row className="page-heading-wrap padding-0 growing-wrap">
          <Col md="12">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <img className="responsive" src={growth} alt="growth" />
            </div>
          </Col>
        </Row>
        {/* <div>
          <div data-aos-duration="700" data-aos="fade-up">
            <img
              src={advantages_banner}
              alt="advantages_banner"
              style={{ width: "100%" }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Advantages;
