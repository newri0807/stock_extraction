import React, { useState } from "react";
import { Box, Button, Tab, Input, TextareaAutosize } from "@mui/material";
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
      <div className="inputArea inner">
        <TabContext value={value}>
          <Box sx={{ borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className="tab0" label="샘플 뉴스" value="0" />
              <Tab label="카카오" value="1" className="keywordBtn" />
              <Tab label="화장품" value="2" />
              <Tab label="삼성" value="3" />
              <Tab label="스마트폰" value="4" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <div className="inputWrapper">
              <MyInput placeholder="뉴스 제목" type="text" />
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
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>

        <MyButton>종목명 추출하기</MyButton>
      </div>
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
  color: #777777;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: -0.45px !important;
  text-align: left;
  border: none;
  background-color: #f7f9fb;
  padding: 12px 0;
  border-bottom: 1px solid #ddd !important;
  padding: 0;
  &::placeholder {
    color: #777777 !important;
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
