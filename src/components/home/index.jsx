import Aos from "aos";
import React, { useEffect } from "react";
import Loader from "../layout/loader";
import About from "./About";
import Banner from "./Banner";
import Brief from "./Brief";
import Info from "./Info";
import Insights from "./Insights";
import Numbers from "./Numbers";
import Plants from "./Plants";
import Team from "./Team";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Loader />
      <Banner />
      <div className="main-body">
        <About
          title="PIONEERING ALTERNATIVE RENEWABLE ENERGY​"
          desc="Geothermal (or Geothermal™) is a full-cycle operations and energy production company providing large scale baseload power solutions, on and off the grid. With offices conveniently located near Houston Texas, our initial mission at Geothermal is the successful deployment of geothermal power plants within Texas and along the interior Gulf Coast region where geothermal resources are proven by vintage oil / gas wells and 3-D seismic.​"
        />
        <div data-aos="fade-up" data-aos-duration="500">
          <Brief />
        </div>
        <Numbers />
        <Insights />
        <Team />
        <About
          title="DEVELOPING GEOTHERMAL POWER ACROSS TEXAS AND THE UNITED STATES"
          desc="The technical team at GT Himalia consists of subject matter experts with over 230 years of combined oil and gas operations experience, which includes supply chain experts, PPA electricity experts, drilling and reservoir engineers, and finance. Moreover, PhD geoscience researchers are currently analyzing the most suitable locations to deploy Organic Rankine Cycle geothermal power plants at basins within Texas, the United States, and at numerous locations around the globe where geothermal resources are proven by mature oil and gas provinces and subsequent data."
        />
        <Plants />
        <Info />
      </div>
    </>
  );
};

export default Home;
