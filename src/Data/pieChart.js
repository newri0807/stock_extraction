import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const data = [
    {
      stock: "한솔케미칼", // 회사이름
      score: 0.7434849143028259, //결과수치
      logit: 21.69752311706543, //뉴스와 회사명의 밀접도
    },
    {
      stock: "SK",
      score: 0.24532733857631683,
      logit: 20.588768005371094,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "score",
    colorField: "stock",
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
  return <Pie {...config} />;
};

export { DemoPie };

// ReactDOM.render(<DemoPie />, document.getElementById("container"));
