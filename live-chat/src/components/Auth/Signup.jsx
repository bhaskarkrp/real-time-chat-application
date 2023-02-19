import React from "react";
import "../../assets/css/login.scss";
import { post } from "../../api/baseURL";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    name: "",
  });

  const [message, setMessage] = React.useState("");

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickTest = async () => {
    const r = await post("/auth/signup", formData);
    setMessage(r.message);
  };

  React.useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="signup-form"
      style={{
        backgroundColor: "white",
        color: "black",
        height: "500px",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h1>Sign Up</h1>
      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={onChangeHandler}
            id="name"
            name="name"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={onChangeHandler}
            id="password"
            name="password"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={onChangeHandler}
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="SignUp"
          onClick={handleClickTest}
          className="btn btn-primary"
        />{" "}
        &nbsp;&nbsp; Already registered?{" "}
        <a className="btn-outline-info" href="/login">
          <b>Login</b>
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

export default Signup;
