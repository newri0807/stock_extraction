const colorPick = (stock, type) => {
  if (type === "txt") {
    switch (true) {
      case ["SK하이닉스", "SK증권", "한국테크놀로지", "현대차"].includes(stock):
        return {
          color: "rgb(99, 149, 249)",
          fontWeight: "bold",
          opacity: "1",
        };
      case ["SK", "엔비디아", "율호"].includes(stock):
        return {
          color: "rgb(98, 218, 171)",
          fontWeight: "bold",
          opacity: "1",
        };
      case ["한솔케미칼", "엔켐"].includes(stock):
        console.log("한솔케미칼");
        return {
          color: "rgb(101, 119, 152)",
          fontWeight: "bold",
          opacity: "1",
        };
      case ["광무"].includes(stock):
        return {
          color: "rgb(99, 109, 249)",
          fontWeight: "bold",
          opacity: "1",
        };
      case ["서보산업"].includes(stock):
        return {
          color: "rgb(79, 9, 149)",
          fontWeight: "bold",
          opacity: "1",
        };
      default:
        return { color: "#000" };
    }
  } else {
    switch (true) {
      case ["SK하이닉스", "SK증권", "한국테크놀로지", "현대차"].includes(stock):
        return {
          backgroundColor: "rgba(99, 149, 249, 0.15)",
        };
      case ["SK", "엔비디아", "율호"].includes(stock):
        return {
          backgroundColor: "rgba(98, 218, 171, 0.15)",
        };
      case ["한솔케미칼", "엔켐"].includes(stock):
        return {
          backgroundColor: "rgba(101, 119, 152, 0.15)",
        };
      case ["광무"].includes(stock):
        return {
          backgroundColor: "rgba(99, 109, 249, 0.15)",
        };
      case ["율호"].includes(stock):
        return {
          backgroundColor: "rgba(79, 109, 249, 0.15)",
        };
      case ["서보산업"].includes(stock):
        return {
          backgroundColor: "rgba(79, 9, 149, 0.15)",
        };
      default:
        return { backgroundColor: "rgb(245, 245, 245)" };
    }
  }
};

export { colorPick };
