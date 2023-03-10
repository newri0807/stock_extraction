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
  const onClickLogin = () => {
    if (inputId === "" || inputPw === "") {
      return;
    }
    axios
      .post(
        "https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io/login",
        {
          user_id: inputId,
          user_pw: inputPw,
        }
      )
      .then(function (response) {
        sessionStorage.setItem("loginUserID", response.data["user_id"]);
        sessionStorage.setItem("loginUserPW", response.data.user_pw);
        sessionStorage.setItem("loginUserName", response.data.user_name);
        setTimeout(navigate("/stock"), 1000);
      })
      .catch((err) => console.log(err.message));
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
