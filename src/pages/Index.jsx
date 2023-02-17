import React from "react";
import { BottomDesc } from "../components/BottomDesc";
import { Extraction } from "../components/Extraction";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Result } from "../components/Result";
import { StrenghtDesc } from "../components/StrenghtDesc";
import { TopDesc } from "../components/TopDesc";

export default function index() {
  return (
    <div className="container">
      <Header />
      <TopDesc />
      <Extraction />
      <Result />
      <BottomDesc />
      <StrenghtDesc />
      <Footer />
    </div>
  );
}
