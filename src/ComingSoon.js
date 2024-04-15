import React from "react";
import "./ComingSoon.css";
import backgroundImage from "./assets/img/commingsoonimg3.jpg";
import logo from "./assets/img/logo.png"; // replace with your logo path

const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <img src={logo} alt="logo" className="logo-comming-soon" />
        <h2 style={{ margin: "40px" }}>Launching Soon</h2>
      </div>
    </div>
  );
};

export default ComingSoon;
