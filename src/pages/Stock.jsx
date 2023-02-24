import React from "react";
import Intro from "../components/Intro";
import Demo from "../components/Demo";
import EngineStrength from "../components/EngineStrength";

export default function Stock() {
  return (
    <div className="container">
      <Intro />
      <Demo />
      <EngineStrength />
    </div>
  );
}
