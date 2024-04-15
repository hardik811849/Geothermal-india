import React from "react";
import { Button } from "react-bootstrap";

const BannerContatctUs = (props) => {
  // const navigate = useNavigation()
  return (
    <div className="banner-wrap">
      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1100"> */}
      <video
        src={
          "https://all-sites-under.s3.us-east-2.amazonaws.com/geothermal/geothermal-360-movies.mp4"
        }
        loop
        muted
        autoPlay
        className="banner-video"
      />
      {/* <ReactPlayer url="https://all-sites-under.s3.us-east-2.amazonaws.com/geothermal/geothermal.mp4" /> */}
      {/* </div> */}

      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1200">
        <img src={banner} alt="" className="banner-svg" />
      </div> */}

      <div className="banner-content-contact">
        <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1300">
          <div className="row">
            <div className="nik">
              <div className=" opacity-100  banner-text-top">
                <p className="opacity-75">A Renewable E&P Power Company</p>
                <h5 className="banner-text text-white">
                  Developing Geothermal Power Across Texas, the United States,
                  and Around the Globe
                </h5>
                <div className="pt-2 d-flex flex-row ">
                  <Button
                    onClick={props.onLearnMore}
                    className="btn learn-more  me-2 rounded-0 text-white"
                    title="Learn more"
                  >
                    Learn more
                  </Button>{" "}
                  &nbsp;
                  <Button
                    onClick={props.onLets}
                    className="btn btn-outline-success transparent-bg rounded-0 text-white"
                    title="Let's connect"
                  >
                    Let's connect
                  </Button>
                </div>
              </div>
            </div>
            <div className=" col-6" />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default BannerContatctUs;
