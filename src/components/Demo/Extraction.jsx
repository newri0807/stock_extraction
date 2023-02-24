import React, { useState } from "react";
import { Box, Button, Tab, Input, TextareaAutosize, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styled from "@emotion/styled";

export const Extraction = () => {
  const [value, setValue] = useState("0");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3 className="title">지금 원하는 뉴스의 종목명을 추출해보세요!</h3>
      <Grid width="100%">
        <div className="inputArea inner">
          <TabContext value={value}>
            <Box sx={{ borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab className="tab0" label="샘플 뉴스" value="0" />
                <Tab label="카카오" value="1" />
                <Tab label="화장품" value="2" />
                <Tab label="삼성" value="3" />
                <Tab label="스마트폰" value="4" />
              </TabList>
            </Box>
            <TabPanel value="0">
              <div className="inputWrapper">
                <MyInput
                  placeholder="뉴스 제목"
                  type="text"
                  disableUnderline={true}
                />
                <div>
                  <div>
                    <MyTextArea
                      placeholder="뉴스 본문"
                      rows="12"
                      aria-invalid="false"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div className="inputWrapper">
                <MyInput
                  placeholder="뉴스 제목"
                  type="text"
                  value='"한솔케미칼, 올해·내년 영업이익 전망치 하향에 목표가↓"-SK'
                  disableUnderline={true}
                />
                <MyTextArea rows="12" aria-invalid="false">
                  SK증권은 한솔케미칼에 대해 올해와 내년 연결 영업이익 전망치
                  하향이 예상된다며 투자의견은 '매수'를 유지했으나 목표주가는
                  28만원으로 15% 하향했다.한동희 SK증권 연구원은 24일 "3분기
                  실적 부진과 내년 업황 둔화를 감안해 한솔케미칼의 올해와 내년
                  연결 영업이익 전망치를 각각 12%, 13% 하향 조정한다"고 말했다.
                  앞서 한솔케미칼의 3분기 연결 실적은 매출 2160억원, 영업이익
                  457억원으로 시장컨센서스를 각각 6%, 16% 하회했다. 당초 3분기
                  TV 등 성수기 진입 효과에 따른 퀀텀닷(QD) 소재 회복을
                  예상했으나 글로벌 경기 위축에 따른 전방 재고 조정으로 QD 소재
                  및 테이팩스의 스마트폰향 판매 부진, 천연가스 및 유가 등 원재료
                  가격 상승 영향으로 과산화수소의 수익성이 하락한 영향으로
                  추정된다.올해 4분기 연결 실적은 매출 2355억원, 영업이익
                  353억원으로 예상된다. QD 소재는 전방 재고조정 일단락 효과에
                  따른 회복, 과산화수소는 원재료 가격 상승분의 판가 전가로
                  수익성이 회복되기 시작할 것으로 전망된다.
                </MyTextArea>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="inputWrapper">
                <MyInput
                  placeholder="뉴스 제목"
                  type="text"
                  disableUnderline={true}
                />
                <MyTextArea
                  placeholder="뉴스 본문"
                  rows="12"
                  aria-invalid="false"
                />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="inputWrapper">
                <MyInput
                  placeholder="뉴스 제목"
                  type="text"
                  disableUnderline={true}
                />
                <MyTextArea
                  placeholder="뉴스 본문"
                  rows="12"
                  aria-invalid="false"
                />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="inputWrapper">
                <MyInput
                  placeholder="뉴스 제목"
                  type="text"
                  disableUnderline={true}
                />
                <MyTextArea
                  placeholder="뉴스 본문"
                  rows="12"
                  aria-invalid="false"
                />
              </div>
            </TabPanel>
          </TabContext>
          <MyButton>종목명 추출하기</MyButton>
        </div>
      </Grid>
    </>
  );
};

const MyButton = styled(Button)`
  height: 43px;
  box-shadow: none;
  font-size: 18px;
  font-weight: bold;
  border: none;
  color: #fff;
  width: 300px;
  height: 50px;
  margin-top: 60px;
  margin-bottom: 150px;
  border-radius: 30px;
  background-image: linear-gradient(98deg, #5812b3 3%, #1b5fce 99%);
`;

const MyInput = styled(Input)`
  width: 100%;
  text-align: left;
  border: none;
  background-color: #f7f9fb;
  padding: 12px 0;
  border-bottom: 1px solid #ddd !important;
  padding: 0;
  font-family: "Pretendard Variable", "Noto Sans KR";
  > input {
    color: #777777;
    font-weight: 500;
    line-height: 1.67;
    letter-spacing: -0.45px !important;
    font-size: 18px;
    &::placeholder {
      opacity: 1 !important;
    }
  }
`;

const MyTextArea = styled(TextareaAutosize)`
  height: 276px !important;
  width: 100%;
  color: #777777;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: -0.45px;
  text-align: left;
  border: none;
  background-color: #f7f9fb;
  padding: 12px 0;
  overflow-y: scroll;
  overflow: auto;
  border: none;
  resize: none;
`;
