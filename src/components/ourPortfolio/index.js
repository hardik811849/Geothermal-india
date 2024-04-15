import portfolioBanner from "../../assets/img/projectBanner.png";
import InnerBanner from "../innerBanner";
import Loader from "../layout/loader";
// import GoogleMap from "./googleMap";
import louisiana from "../../assets/img/louisiana.png";
import texas from "../../assets/img/texas.png";
// import iraq from "../../assets/img/iraq.png";
import himachal from "../../assets/img/himachal.png";

const OurPortFolio = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="Upcoming Projects" image={portfolioBanner} />
      {/* <PageHeading heading="the technical team at GT Himalia Inc. consists of subject matter experts with over 230 years of combined oil and gas operations experience. Domain expertise includes supply chain experts, drilling and reservoir engineers, PPA experts, as well as geoscience PhD researchers currently analyzing the most optimal geothermal locations to deploy Organic rankine cycle geothermal plants near Houston and greater texas" /> */}

      <div data-aos-duration="700" data-aos="fade-up" className="project-body">
        <div className="row">
          <div className="col-md-12">
            <br /> <br />
            <h2>UPCOMING PROJECTS</h2>
            <br />
          </div>
          <div className="col-md-4 d-flex">
            <div className="thumbnail flex-grow-1">
              <a href="#">
                <img src={texas} alt="Lights" className="w-100 " />
                <div className="caption">
                  <p className="caption-power">2.9GW</p>
                  <h2>Texas, USA</h2>
                  {/* <p>With region headquarters in Aberdeen, UK</p> */}
                </div>
              </a>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="thumbnail">
              <a href="#">
                <img src={up} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">100MW</p>
                  <h2>Uttar Pradesh, India</h2> */}
          {/* <p>With region headquarters in Aberdeen, UK</p> */}
          {/* </div>
              </a>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6">
            <div className="thumbnail">
              <a href="#">
                <img src={uk} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">100MW</p>
                  <h2>Uttarakhand, INDIA</h2>
                  <p>With region headquarters in Aberdeen, UK</p>
                </div>
              </a>
            </div>
          </div> */}
          <div className="col-md-4 d-flex">
            <div className="thumbnail flex-grow-1">
              <a href="#">
                <img src={himachal} alt="Lights" className="w-100 " />
                <div className="caption">
                  <p className="caption-power">100MW</p>
                  <h2>INDIA</h2>
                  {/* <p>With region headquarters in Aberdeen, UK</p> */}
                </div>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="thumbnail">
              <a href="#">
                <img src={ladakh} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">60MW</p>
                  <h2>Ladakh, INDIA </h2>
                  /<p>With region headquarters in Aberdeen, UK</p>
                </div>
              </a>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6">
            <div className="thumbnail">
              <a href="#">
                <img src={hungry} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">150MW</p>
                  <h2>Hungary</h2>
                  <p>With region headquarters in Aberdeen, UK</p>
        </div>
      </a>
    </div >
          </div >  */}
          {/* <div className="col-lg-4 col-md-6">
            <div className="thumbnail">
              <a href="#">
                <img src={carribbean} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">120MW</p>
                  <h2>United Arab Emirates</h2>
                  <p>With region headquarters in Aberdeen, UK</p>
                </div>
              </a>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6"> */}
          {/* <div className="thumbnail"> */}
          {/* <a href="#"> */}
          {/* <img src={iraq} alt="Lights" /> */}
          {/* <div className="caption"> */}
          {/* <p className="caption-power">1.8GW</p> */}
          {/* <h2>Iraq </h2> */}
          {/* <p>With region headquarters in Aberdeen, UK</p> */}
          {/* </div> */}
          {/* </a> */}
          {/* </div> */}
          {/* </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="thumbnail">
              <a href="#">
                <img src={egypt} alt="Lights" />
                <div className="caption">
                  <p className="caption-power">100MW</p>
                  <h2>Egypt </h2>
                  <p>With region headquarters in Aberdeen, UK</p>
                </div>
              </a>
            </div>
          </div> */}

          <div className="col-md-4 d-flex">
            <div className="thumbnail flex-grow-1">
              <a href="#">
                <img src={louisiana} alt="Lights" className="w-100 " />
                <div className="caption">
                  <p className="caption-power">80MW</p>
                  <h2>Louisiana, USA</h2>
                  {/* <p>With region headquarters in Aberdeen, UK</p> */}
                </div>
              </a>
            </div>
          </div>
          {/* 
          <div className="col-md-12">
            <br /> <br />
            <h2>GEOTHERMAL PROJECT MAP</h2>
            <GoogleMap />
            <img src={projectMap} className="img img-responsive" />
            <br />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurPortFolio;
