import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Extraction } from "./Demo/Extraction";
import { Result } from "./Demo/Result";

const Demo = () => {
  const [value, setValue] = useState("0");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttonClick = useCallback(() => {
    setLoading(true);
    axios({
      method: "get", // 통신 방식
      url: `${url}/stock/news?idx=${value}`, // 서버
      timeout: 2000,
    })
      .then(function (response) {
        //console.log(response.data);
        setDataList(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  });

  useEffect(() => {
    const timeout = setTimeout(() => buttonClick, 2000);
    return () => clearTimeout(timeout);
  }, [buttonClick, dataList]);

  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="demoContainer ">
        <Extraction
          buttonClick={buttonClick}
          value={value}
          setValue={setValue}
        />
        <Result dataList={dataList} loading={loading} />
      </div>
    </div>
  );
};

export default Demo;
