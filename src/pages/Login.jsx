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
        console.log(response.data, response.data["user_id"]);
        sessionStorage.setItem("loginUserID", response.data["user_id"]);
        sessionStorage.setItem("loginUserPW", response.data.user_pw);
        sessionStorage.setItem("loginUserName", response.data.user_name);
        setTimeout(navigate("/stock"), 1000);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div
      style={{
        width: "100%",
        clear: "both",
        margin: "120px auto",
        height: "90vh",
        background: "#fff",
      }}
    >
      <input
        type="text"
        placeholder="아이디"
        value={inputId}
        onChange={handleInputId}
      />
      <input
        type="text"
        placeholder="패스워드"
        value={inputPw}
        onChange={handleInputPw}
      />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
};
