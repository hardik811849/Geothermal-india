import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../../assets/img/New_logo-lg.png";
import authService from "../../services/authService";

const Footer = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      email: email,
      status: true,
    };
    authService.addNewsLetter(data).then((res) => {
      console.log(res.data);
      if (res.data.messageCode === "200") {
        return Swal.fire({
          icon: "success",
          title: "success",
          text: "Email Added Successfully!",
        });
      }
      if (res.data.messageCode === "409") {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: `${res.data.content}`,
        });
      }
      if (res.data.messageCode === "400") {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some error occured. Please try again leter.",
        });
      }
    });
  };

  return (
    <div className="footer-wrap">
      <div className="footer-top d-md-flex align-items-center">
        {/* <a href="/" className="footer-logo">
  
            <img src={logo} alt="" />
  
          </a>
  
  
  
  
          <div className="footer-menu d-md-flex align-items-center">
  
            <a href="/" className="footer-link">
  
              HOME
  
            </a>
  
            <a href="/about-us" className="footer-link">
  
              About Us
  
            </a>
  
            <a href="/team" className="footer-link">
  
              Teams
  
            </a>
  
            <a href="/technology" className="footer-link">
  
              Technology
  
            </a>
  
           
  
  
  
  
          </div> */}

        <div className="row footerLink">
          <div className="col-xl-3 col-md-4 col-sm-12 col-12">
            <div className="footer-image">
              <a href="/" className="footer-logo">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "80%", padding: "4px" }}
                />
              </a>
            </div>

            <div className="footer-text">
              <p>
                A full-cycle operations and energy production company providing
                large scale baseload power solutions, on and off the grid.
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-3 col-sm-12 col-12">
            <div className="header-name">
              <p>Company</p>
            </div>

            <div className="body-name">
              <p>
                <a href="/about-us">About us</a>
              </p>

              <p>
                <a href="/advancing">ESG</a>
              </p>

              <p>
                <a href="/our-portfolio">Projects</a>
              </p>

              <p>
                <a href="/advantages">Competitive Advantage</a>
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-3 col-sm-12 col-12">
            <div className="header-name">
              <p>Technology</p>
            </div>

            <div className="body-name">
              <p>
                <a href="/technology/orc">ORC Plant</a>
              </p>

              <p>
                <a href="/technology/scicat">Technology</a>
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 col-sm-12 col-12">
            <div className="header-name">
              <p>Other</p>
            </div>

            <div className="body-name">
              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("contact/us")}
                >
                  Contact Us
                </a>
              </p>

              <p>
                <a href="/investor">Investor</a>
              </p>

              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("insights")}
                >
                  News & insights
                </a>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-12 col-sm-12 col-12">
            <div className="header-name">
              <p>Newsletter</p>
            </div>

            <div>
              <div className="search-box">
                <input
                  onChange={(e) => handleChange(e)}
                  value={email}
                  type="text"
                  placeholder="Email address"
                />
                <div className="align-self-center">
                  <button onClick={() => handleSubmit()} type="submit">
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="copyright">© 2024 GT Himalia All Rights Reserved.</p>

          <div className="social-wrap">
            <a href="/terms-of-use" className="footer-link">
              Terms of use
            </a>

            <a href="/legal-disclaimer" className="footer-link">
              Legal Disclaimer
            </a>

            <a href="/privacy-policy" className="footer-link">
              Privacy Policy
            </a>

            <a href="/cookie-policy" className="footer-link">
              Cookie Policy
            </a>

            <a href="mailto:info@geothermal.io" className="social-link">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </a>

            <a
              href="https://www.linkedin.com/company/geothermal-core/people/"
              target="_blank"
              className="social-link"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="wrap">
          <div className="box_1">
            {url === "/" ? (
              <h3>
                “Mankind has been using the Earth's heat for thousands of years
                and we are committed to turning this heat into power for the
                continued use for mankind.”
              </h3>
            ) : null}
            {url === "/advancing" ? (
              <h3>
                "Geothermal energy is the forgotten renewable; the energy source
                that could meet global demand many times over."
              </h3>
            ) : null}
            {url === "/technology/orc" ? (
              <h3>
                "Geothermal energy is a sustainable, reliable, and
                environmentally friendly source of power that has the potential
                to significantly contribute to the world's energy needs."
              </h3>
            ) : null}
            {url === "/technology/scicat" ? (
              <h3>
                "Geothermal energy is a local, reliable, renewable resource that
                provides clean energy around the clock, reducing greenhouse gas
                emissions and air pollution..."
              </h3>
            ) : null}
            {url === "/advantages" ? (
              <h3>
                "Geothermal energy is the Earth's own heat that can be used to
                generate electricity or to heat and cool buildings."
              </h3>
            ) : null}
            {url === "/about-us" ? (
              <h3>
                "Geothermal energy is the only renewable energy source that
                provides both heat and electricity, making it a versatile and
                valuable resource."
              </h3>
            ) : null}
            {url === "/our-portfolio" ? (
              <h3>
                "Geothermal energy has the potential to play a significant role
                in reducing our reliance on fossil fuels and mitigating climate
                change."
              </h3>
            ) : null}
            {url === "/contact/us" ? (
              <h3>
                "By harnessing the Earth's natural heat, geothermal energy
                presents a golden opportunity to reduce our carbon footprint and
                transition to a more sustainable energy landscape."
              </h3>
            ) : null}
            {url === "/investor" ? (
              <h3>
                "Geothermal energy represents a bridge between traditional
                energy sources and the renewable energy future, offering a
                reliable and sustainable transition pathway."
              </h3>
            ) : null}
            {url === "/insights" ? (
              <h3>
                "Geothermal energy is a virtually limitless resource, tapping
                into the Earth's natural heat to provide clean, renewable power
                for generations to come."
              </h3>
            ) : null}
            {url === "/terms-of-use" ? (
              <h3>
                "Harnessing geothermal energy unlocks a sustainable solution for
                meeting the world's growing energy demands while preserving our
                planet for future generations."
              </h3>
            ) : null}
            {url === "/legal-disclaimer" ? (
              <h3>
                "Geothermal energy is the silent giant of the renewable energy
                sector, quietly providing reliable power without the need for
                vast land use or extensive infrastructure."
              </h3>
            ) : null}
            {url === "/privacy-policy" ? (
              <h3>
                "As the world seeks cleaner alternatives to fossil fuels,
                geothermal energy emerges as a shining beacon of hope, offering
                a pathway to a greener and more sustainable future."
              </h3>
            ) : null}
            {url === "/cookie-policy" ? (
              <h3>
                "Geothermal energy is a hidden gem beneath our feet, offering
                boundless potential to power communities, drive economic growth,
                and combat climate change."
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
