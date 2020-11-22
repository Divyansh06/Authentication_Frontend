import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Login } from "../Redux/Actions/action";
import { connect } from "react-redux";

function LoginComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });

  function handleLogin() {
    var update_validation = {
      email: true,
      password: true,
    };

    function validateEmail(value) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }

    if (password.length >= 8 && validateEmail(email)) {
      props.Login({
        email,
        password,
      });
      props.history.push("/");
    }
    if (!(password.length >= 8)) {
      update_validation.password = false;
    }

    if (!validateEmail(email)) {
      update_validation.email = false;
    }
    setValidation(update_validation);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#eee",
        height: window.innerHeight,
      }}
    >
      <Card
        style={{
          marginTop: window.innerHeight / 5,
          marginBottom: window.innerHeight / 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
          width: window.innerWidth / 3,
        }}
      >
        <div
          style={{
            backgroundColor: "#90caf9",
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: "50%",
          }}
        >
          <LockOutlined style={{ fontSize: 30 }} />
        </div>
        <div>
          <h2>Sign in</h2>
        </div>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ margin: 20 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          error={!validation.email}
          type={"password"}
          label="Password"
          variant="outlined"
          fullWidth
          style={{ margin: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          error={!validation.password}
          style={{ marginTop: 20 }}
          variant={"contained"}
          color={"primary"}
          fullWidth
          onClick={() => handleLogin()}
        >
          Sign In
        </Button>
        <Button
          onClick={() => props.history.push("/signup")}
          style={{ margin: 20 }}
          color={"primary"}
        >
          Dont have an account? Sign Up
        </Button>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sign_in: state.sign_in,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Login: (data) => Login(data, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
