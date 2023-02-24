import React from "react";
import { Extraction } from "./Demo/Extraction";
import { Result } from "./Demo/Result";

const Demo = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="demoContainer ">
        <Extraction />
        <Result />
      </div>
    </div>
  );
};

export default Demo;
