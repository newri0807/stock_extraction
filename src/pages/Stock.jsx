import React, { useEffect } from "react";
import Intro from "../components/Intro";
import Demo from "../components/Demo";
import EngineStrength from "../components/EngineStrength";

export default function Stock() {
  const loginUserCk = sessionStorage.getItem("loginUserName");
  useEffect(() => {
    if (loginUserCk) alert(`${loginUserCk}님, 환영합니다`);
  }, []);

  return (
    <div className="container">
      <Intro />
      <Demo />
      <EngineStrength />
    </div>
  );
}
