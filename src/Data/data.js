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

const data2 = data.sort(function (a, b) {
  return b.score - a.score;
});

export { data, data2 };
