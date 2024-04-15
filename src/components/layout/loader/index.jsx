import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/New_logo-lg.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={loading ? "loader-wrap" : "loader-wrap hide"}>
      <img src={logo} alt="logo" className="logo-loader" />
    </div>
  );
};

export default Loader;
