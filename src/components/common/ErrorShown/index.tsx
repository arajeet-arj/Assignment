import "./errorShown.css";

import React from "react";

const ErrorShown = () => {
  return (
    <div className="es01Container">
      <img
        src={require("../../../assets/images/error.png").default}
        alt="Bad Request"
        className="error-image"
      />
      Some Error is there , please search online.
    </div>
  );
};

export default ErrorShown;
