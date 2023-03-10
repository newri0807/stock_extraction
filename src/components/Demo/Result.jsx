import React from "react";
import { DemoPie } from "../../Data/pieChart";
import { colorPick } from "../../func/colorPick";
import { CircularProgress } from "@mui/material";

export const Result = ({ dataList, loading, stockArr }) => {
  const percentageCal = (percent) => {
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
        <div className="resultArea inner">
          <div className="resultSection1">
            <p className="title">분석결과 </p>
            <div className="visualization">
              {dataList.length === 0 ? (
                <span className="empty">뉴스를 입력하고 결과를 확인하세요</span>
              ) : loading ? (
                <CircularProgress color="primary" size={26} />
              ) : (
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
                        className="result-first"
                        style={colorPick(
                          dataList.answer[0].stock,
                          "txt",
                          stockArr
                        )}
                      >
                        {" "}
                        •{" "}
                      </span>
                      {dataList.answer[0].stock}
                    </p>
                    <p className="subtitle list">List</p>
                    <div className="list-contents">
                      {dataList.answer.map((item, index) => (
                        <p
                          key={index}
                          style={colorPick(item.stock, "txt", stockArr)}
                        >
                          <span style={colorPick(item.stock, "txt", stockArr)}>
                            {" "}
                            •{" "}
                          </span>
                          {item.stock} {percentageCal(item.score)}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="chart">
                    <DemoPie
                      style={{ width: "300px", height: "300px" }}
                      datas={dataList.answer}
                    />
                  </div>
                  <div className="detailExplain">
                    <p
                      className="subtitle result"
                      style={{ textAlign: "left" }}
                    >
                      세부 분석결과
                    </p>
                    <div className="subtitleResult-contents">
                      {dataList.answer.map((item, index) => (
                        <div key={index}>
                          <p
                            style={{
                              marginTop: "0px",
                              height: "19px",
                              fontWeight: "bold",
                              width: "130px",
                            }}
                          >
                            <span
                              style={colorPick(item.stock, "txt", stockArr)}
                            >
                              {" "}
                              •{" "}
                            </span>
                            {item.stock}
                          </p>
                          <p style={{ width: "270px" }}>
                            "Score": {item.score}
                            <br /> "Logit": {item.logit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="resultSection2">
            <p className="title">Sentence 분석</p>
            <div className="visualization">
              {dataList.length === 0 ? (
                <span className="empty">뉴스를 입력하고 결과를 확인하세요</span>
              ) : loading ? (
                <CircularProgress color="primary" size={26} />
              ) : (
                <div>
                  {dataList.sentence.map((item) => (
                    <div
                      className="sentenceReport2"
                      style={
                        item.condition.length > 0
                          ? colorPick(item.condition[0].stock, "bg", stockArr)
                          : { backgroundColor: "rgb(245, 245, 245)" }
                      }
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
                        <span
                          style={
                            item.condition.length > 0
                              ? colorPick(
                                  item.condition[0].stock,
                                  "txt",
                                  stockArr
                                )
                              : { backgroundColor: "rgb(245, 245, 245)" }
                          }
                        >
                          {item.condition.length === 0
                            ? `없음`
                            : percentageCal(item.condition[0].score)}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
