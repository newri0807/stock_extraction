import React from "react";
import { Box, Button, Tab, Input, TextareaAutosize, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styled from "@emotion/styled";
import { sampleNews } from "../../data/sampleNews";

export const Extraction = ({ buttonClick, value, setValue }) => {
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
                <p className="tab0">샘플 뉴스</p>
                <Tab label="카카오" value="0" />
                <Tab label="화장품" value="1" />
                <Tab label="삼성" value="2" />
                <Tab label="스마트폰" value="3" />
              </TabList>
            </Box>
            {sampleNews.map((item, index) => (
              <TabPanel value={String(index)} key={index}>
                <div className="inputWrapper">
                  <MyInput
                    placeholder="뉴스 제목"
                    type="text"
                    value={item.query}
                    disableUnderline={true}
                  />
                  <MyTextArea
                    rows="12"
                    aria-invalid="false"
                    value={item.context}
                  />
                </div>
              </TabPanel>
            ))}
          </TabContext>
          <MyButton onClick={buttonClick}>종목명 추출하기</MyButton>
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
