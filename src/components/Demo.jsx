import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Extraction } from "./Demo/Extraction";
import { Result } from "./Demo/Result";

const Demo = () => {
  const [value, setValue] = useState("0");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io";
  const [stockArrs, setStockArrs] = useState([]);

  const stockArr = [];
  const stockList = (data) => {
    data.answer.map((item) => stockArr.push(item.stock));
    // eslint-disable-next-line array-callback-return
    data.sentence.map((item) => {
      if (
        item.condition.length !== 0 &&
        stockArr.indexOf(Object.values(item.condition[0].stock).join("")) === -1
      ) {
        stockArr.push(Object.values(item.condition[0].stock).join(""));
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttonClick = useCallback(() => {
    setLoading(true);
    axios({
      method: "get", // 통신 방식
      url: `${url}/stock/news?idx=${value}`, // 서버
    })
      .then(function (response) {
        //console.log(response.data);
        setTimeout(() => {
          setDataList(response.data);
          stockList(response.data);
          setStockArrs(stockArr);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err.message));
  });

  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="demoContainer ">
        <Extraction
          buttonClick={buttonClick}
          value={value}
          setValue={setValue}
        />
        <Result dataList={dataList} loading={loading} stockArr={stockArrs} />
      </div>
    </div>
  );
};

export default Demo;
