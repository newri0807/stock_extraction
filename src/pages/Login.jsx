import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const navigate = useNavigate();

  const onClickLogin = async () => {
    if (!inputId || !inputPw) return;

    try {
      const data = {
        user_id: inputId,
        user_pw: inputPw,
      };

      const response = await axios.post(
        "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io/login",
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      );

      const { user_id, user_pw, user_name } = response.data;

      // if (!user_name) {
      //   throw new Error("User name is undefined");
      // }

      sessionStorage.setItem("loginUserID", user_id);
      sessionStorage.setItem("loginUserPW", user_pw);
      sessionStorage.setItem("loginUserName", user_name);

      setTimeout(() => navigate("/stock"), 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div id="loginContainer">
      <form action="">
        <h3>Login</h3>
        <TextField
          id="outlined-basic"
          label="아이디"
          variant="outlined"
          placeholder="아이디"
          value={inputId}
          onChange={handleInputId}
        />
        <TextField
          id="outlined-basic"
          label="패스워드"
          variant="outlined"
          placeholder="패스워드"
          value={inputPw}
          onChange={handleInputPw}
        />
        <Button
          variant="contained"
          onClick={onClickLogin}
          id="login-submit-btn"
        >
          로그인
        </Button>
      </form>
    </div>
  );
};
