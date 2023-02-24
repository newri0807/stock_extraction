import React from "react";
import { DemoPie } from "../../Data/pieChart";
import { sentence } from "../../Data/sentence";

export const Result = () => {
  const percentageCal = (percent) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  const bgColor = (index, type) => {
    if (type === "bg") {
      switch (index) {
        case 0:
          return { backgroundColor: "rgba(101, 119, 152, 0.15)" };
        case 2:
          return { backgroundColor: "rgba(98, 218, 171, 0.15)" };
        case 4:
          return { backgroundColor: "rgba(99, 149, 249, 0.15)" };
        default:
          return { backgroundColor: "rgb(245, 245, 245)" };
      }
    } else {
      switch (index) {
        case 0:
          return {
            color: "rgb(101, 119, 152)",
            fontWeight: "bold",
            opacity: "1",
          };
        case 2:
          return {
            color: "rgb(98, 218, 171)",
            fontWeight: "bold",
            opacity: "1",
          };
        case 4:
          return {
            color: "rgb(99, 149, 249)",
            fontWeight: "bold",
            opacity: "1",
          };
        default:
          return {};
      }
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
        <div className="resultArea inner">
          <div className="resultSection1">
            <p className="title">분석결과</p>
            <div className="visualization">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="chartExplain">
                  <p className="subtitle result">Result</p>
                  <p
                    style={{
                      marginTop: "24px",
                      height: "19px",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "0px",
                        fontSize: "30px",
                        verticalAlign: "sub",
                        color: "rgb(99, 149, 249)",
                      }}
                    >
                      {" "}
                      •{" "}
                    </span>
                    한솔케미칼
                  </p>
                  <p className="subtitle list">List</p>
                  <p
                    style={{
                      marginTop: "12px",
                      height: "19px",
                      fontWeight: "bold",
                      color: "rgb(99, 149, 249)",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "0px",
                        fontSize: "30px",
                        verticalAlign: "sub",
                        color: "rgb(99, 149, 249)",
                      }}
                    >
                      {" "}
                      •{" "}
                    </span>
                    한솔케미칼 74%
                  </p>
                  <p
                    style={{
                      marginTop: "12px",
                      height: "19px",
                      fontWeight: "bold",
                      color: "rgb(98, 218, 171)",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "0px",
                        fontSize: "30px",
                        verticalAlign: "sub",
                        color: "rgb(98, 218, 171)",
                      }}
                    >
                      {" "}
                      •{" "}
                    </span>
                    SK 24%
                  </p>
                </div>
                <div className="chart">
                  <DemoPie />
                </div>
                <div className="detailExplain">
                  <p className="subtitle result" style={{ textAlign: "left" }}>
                    세부 분석결과
                  </p>
                  <div>
                    <p
                      style={{
                        marginTop: "0px",
                        height: "19px",
                        fontWeight: "bold",
                        width: "130px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "-20px",
                          fontSize: "30px",
                          verticalAlign: "sub",
                          color: "rgb(99, 149, 249)",
                        }}
                      >
                        {" "}
                        •{" "}
                      </span>
                      한솔케미칼
                    </p>
                    <p style={{ width: "270px" }}>
                      "Score": 0.7434849143028259
                      <br /> "Logit": 21.697523117065
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        marginTop: "0px",
                        height: "19px",
                        fontWeight: "bold",
                        width: "130px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "-20px",
                          fontSize: "30px",
                          verticalAlign: "sub",
                          color: "rgb(98, 218, 171)",
                        }}
                      >
                        {" "}
                        •{" "}
                      </span>
                      SK
                    </p>
                    <p style={{ width: "270px" }}>
                      "Score": 0.24532733857631683
                      <br /> "Logit": 20.588768005371
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resultSection2">
            <p className="title">Sentence 분석</p>
            <div className="visualization">
              {sentence.map((item) => (
                <div
                  className="sentenceReport2"
                  style={bgColor(item.index, "bg")}
                  key={item.index}
                >
                  <p className="sentence">{item.sentence}</p>
                  <p className="percent">
                    <span>
                      {item.condition.length === 0
                        ? null
                        : item.condition[0].stock}
                      &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={bgColor(item.index, "text")}>
                      {item.condition.length === 0
                        ? `없음`
                        : percentageCal(item.condition[0].score)}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
