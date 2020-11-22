import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Signup } from "../Redux/Actions/action";
import { connect } from "react-redux";

function SignupComponent(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    password: true,
  });

  function handleSignup() {
    var update_validation = {
      name: true,
      email: true,
      password: true,
    };
    function validateEmail(value) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }

    if (name !== "" && password.length >= 8 && validateEmail(email)) {
      props.Signup({
        name,
        email,
        password,
      });
      props.history.push("/signin");
    }

    if (name === "") {
      update_validation.name = false;
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
          marginTop: window.innerHeight / 6,
          marginBottom: window.innerHeight / 7,
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
          <h2>Sign up</h2>
        </div>
        <TextField
          error={!validation.name}
          label="Name"
          variant="outlined"
          fullWidth
          style={{ margin: 20 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          error={!validation.email}
          label="Email"
          variant="outlined"
          fullWidth
          style={{ margin: 20 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          email={!validation.password}
          type={"password"}
          label="Password"
          variant="outlined"
          fullWidth
          style={{ margin: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: 20 }}
          variant={"contained"}
          color={"primary"}
          fullWidth
          onClick={() => handleSignup()}
        >
          Sign Up
        </Button>
        <Button
          onClick={() => props.history.push("/signin")}
          style={{ margin: 20 }}
          color={"primary"}
        >
          Already have an account? Sign In
        </Button>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sign_up: state.sign_up,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Signup: (data) => Signup(data, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
