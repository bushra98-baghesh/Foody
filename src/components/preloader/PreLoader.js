import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";
function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>F</span>
        <span className="text-[#DC0D28]">OO</span>
        <span>D</span>
        <span>Y</span>
      </div>
    </div>
  );
}

export default PreLoader;
