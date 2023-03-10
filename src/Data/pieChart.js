import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = ({ datas, stockArr }) => {
  const data = datas;
  const config = {
    appendPadding: 10,
    data,
    angleField: "score",
    colorField: "stock",
    // color: ({ stock }) => {
    //   switch (true) {
    //     case ["SK하이닉스", "SK증권", "한국테크놀로지", "현대차"].includes(
    //       stock
    //     ):
    //       return "rgb(99, 149, 249)";
    //     case ["SK", "엔비디아", "율호"].includes(stock):
    //       return "rgb(98, 218, 171)";
    //     case ["한솔케미칼", "엔켐"].includes(stock):
    //       return "rgb(101, 119, 152)";
    //     case ["광무"].includes(stock):
    //       return "rgb(99, 109, 249)";
    //     case ["율호"].includes(stock):
    //       return "rgb(79, 109, 249)";
    //     case ["서보산업"].includes(stock):
    //       return "rgb(79, 9, 149)";
    //     default:
    //       return "rgb(245, 245, 245)";
    //   }
    // },
    radius: 0.9,
    legend: false,
    label: {
      type: "inner",
      offset: "-45%",
      content: "{name} {percentage}",
      style: {
        fontSize: 11,
        textAlign: "center",
      },
    },

    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} width={300} height={300} />;
};

export { DemoPie };

// ReactDOM.render(<DemoPie />, document.getElementById("container"));
