import React from "react";

export const BottomDesc = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="characteristic inner">
        <p>종목명 추출 인공지능</p>
        <span className="explain">
          자사의 “주식 종목 추천 인공지능”은 GPT모델을 fine-tuning한 KoGPT2
          모델을 사용하여 한국어와 호환이 어려웠던 문제점을 극복했습니다.
          <br />
          단순히 기사에서 가장 많이 등장한 키워드를 바탕으로 종목을 추출하는
          것이 아닌,
          <br />
          <strong>
            모델이 직접 텍스트의 문맥을 고려하여 가장 적합한 종목을 선별
          </strong>
          해내거나 생성합니다.
          <br />
        </span>
      </div>
    </div>
  );
};
