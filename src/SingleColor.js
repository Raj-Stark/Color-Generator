import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 8 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
      }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{`#${hexColor}`}</p>
      {alert && <p className="alert"> Copied To Clipboard</p>}
    </article>
  );
};

export default SingleColor;
