import React from "react";
import { formValidation } from "../../helpers/validation.helper";

function AddRoomForm() {

    const [roomData, setRoomData] = React.useState({ name: "", password: "" });

    const [message, setMessage] = React.useState("");

    const handleChange = (e) => {
        setRoomData({ ...roomData, [e.target.name]: e.target.value });
    };

    const handleAddRoom = () => {
        if (formValidation(roomData, setMessage)) {
            post("/user/addroom", roomData)
                .then((response) => {
                    setMessage(response.message);
                    if (response.success) {
                        setToLocalStorage(response.user);
                    }
                })
        }
    };

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
                    value={roomData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    name="name"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    value={roomData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    name="password"
                />
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    value="LogIn"
                    onClick={handleAddRoom}
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
};

export default AddRoomForm;