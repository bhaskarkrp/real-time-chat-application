import React from "react";
import "../../assets/css/login.scss";
import { post } from "../../api/baseURL";
import { useNavigate } from "react-router-dom";
import { formValidation } from "../../helpers/validation.helper";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginClick = () => {
    if (formValidation(loginData, setMessage)) {
      post("/auth/signin", loginData)
        .then((response) => {
          setMessage(response.message);
          if (response.success) {
            setToLocalStorage(response.user);
          }
        })
    }
  };

  const setToLocalStorage = (data) => {
    const loggedInUser = localStorage.getItem("loggedIn");
    if (!loggedInUser) {
      localStorage.setItem("loggedIn", JSON.stringify(data));
      navigate("/");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, [])

  return (
    <div
      className="signup-form"
      style={{
        backgroundColor: "white",
        color: "black",
        height: "400px",
        padding: "20px",
        borderRadius: "5px",
        width: "350px",
      }}
    >
      <center>
        <img
          src="images/avatar.png"
          width="40%"
          style={{ borderRadius: "50%" }}
          alt=""
        />
      </center>
      <h1>Login</h1>
      <br />
      <div className="form-group">
        <input
          type="text"
          value={loginData.email}
          onChange={handleChange}
          className="form-control"
          style={{ padding: "0 1rem" }}
          placeholder="Email"
          id="email"
          name="email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={loginData.password}
          onChange={handleChange}
          className="form-control"
          style={{ padding: "0 1rem" }}
          placeholder="Password"
          id="password"
          name="password"
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="LogIn"
          onClick={handleLoginClick}
          className="button-chat"
        />{" "}
        &nbsp;&nbsp; Don't have account?{" "}
        <a className="btn btn-outline-primary" href="/signup">
          <b>Sign Up</b>
        </a>
      </div>
      <div className="form-group">
        <span id="message" name="message">
          {message}
        </span>
      </div>
    </div>
  );
}

export default Login;
