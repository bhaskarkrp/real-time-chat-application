import React from "react";
import "../../assets/css/login.scss";
import { post } from "../../api/baseURL";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  
  const handleLoginClick = async () => {
    const response = await post("/auth/signin", loginData);
    setMessage(response.message);
    setToLocalStorage(response.user);
    console.log(response);
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
      <br />
      <div className="form-group">
        <input
          type="text"
          value={loginData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={loginData.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="LogIn"
          onClick={handleLoginClick}
          className="btn btn-primary"
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
