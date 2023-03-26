import React from "react";
import "./AuthMain.css";
import Image from "../assets/chairman.svg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const AuthMain = () => {
  return (
    <div className="authMain">
      <div className="authContent">
        <h4>
          Welcome to your <br /> professional community{" "}
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Box
            sx={{
              //   width: 500,
              maxWidth: "100%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <TextField fullWidth label="Email" id="fullWidth" />
          </Box>
          <Box
            sx={{
              //   width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Phone" id="fullWidth" />
          </Box>
        </div>
        <div style={{ marginTop: "50px" }}>
          <a className="loginForget">Forget Password?</a>
        </div>

        <div className="loginBtns">
          <Button
            variant="contained"
            className="viewProfile"
            style={{ borderRadius: "20px" }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            className="viewProfile"
            style={{ borderRadius: "20px" }}
          >
            Sign In Google
          </Button>
          <Button
            variant="outlined"
            className="viewProfile"
            style={{ borderRadius: "20px" }}
          >
            New To Linkedin? Join Now
          </Button>
        </div>
      </div>
      <div className="loginImageWrapper">
        <img src={Image} className="loginImage" />
      </div>
    </div>
  );
};

export default AuthMain;
