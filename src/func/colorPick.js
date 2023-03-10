const colorPick = (stock, type, stockArr) => {
  const colors = [
    "rgb(99, 149, 249)",
    "rgb(98, 218, 171)",
    "rgb(101, 119, 152)",
    "rgb(99, 109, 249)",
    "rgb(79, 9, 149)",
  ];

  const bgColors = [
    "rgba(99, 149, 249, 0.15)",
    "rgba(98, 218, 171, 0.15)",
    "rgba(101, 119, 152, 0.15)",
    "rgba(99, 109, 249, 0.15)",
    "rgba(79, 109, 249, 0.15)",
    "rgba(79, 9, 149, 0.15)",
  ];

  if (type === "txt") {
    const idx = stockArr.indexOf(stock);
    return {
      color: colors[idx],
      fontWeight: "bold",
      opacity: "1",
    };
  } else {
    const idx = stockArr.indexOf(stock);
    return {
      backgroundColor: bgColors[idx],
    };
  }
};

export { colorPick };
