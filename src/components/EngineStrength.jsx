import React from "react";
import { StrenghtDesc } from "./EngineStrength/StrenghtDesc";
import { BottomDesc } from "./EngineStrength/BottomDesc";

const EngineStrength = () => {
  return (
    <div className="strengthContainer">
      <BottomDesc />
      <StrenghtDesc />
    </div>
  );
};

export default EngineStrength;
