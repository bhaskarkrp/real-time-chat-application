import React from "react";
import { post } from "../../api/baseURL";
import { formValidation } from "../../helpers/validation.helper";

function CreateRoomForm() {

    const [roomData, setRoomData] = React.useState({ roomName: "", password: "" });

    const [message, setMessage] = React.useState("");

    const handleChange = (e) => {
        setRoomData({ ...roomData, [e.target.name]: e.target.value });
    };

    const handleAddRoom = () => {
        if (formValidation(roomData, setMessage)) {
            const user = localStorage.getItem("loggedIn");
            const { id } = JSON.parse(user);
            post("/room/createroom", { ...roomData, admin: id })
                .then((response) => {
                    setMessage(response.message);
                    if (response.success) {
                        console.log('Room Created Successfully!')
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
            <h1>Create Room</h1>
            <br />
            <div className="form-group">
                <input
                    type="text"
                    value={roomData.roomName}
                    onChange={handleChange}
                    className="form-control"
                    style={{padding: "0 1rem"}}
                    placeholder="Enter the room name"
                    id="name"
                    name="roomName"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    value={roomData.password}
                    onChange={handleChange}
                    className="form-control"
                    style={{padding: "0 1rem"}}
                    placeholder="Enter the room password"
                    id="password"
                    name="password"
                />
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    value="Create Room"
                    onClick={handleAddRoom}
                    className="button-chat"
                />
            </div>
            <div className="form-group">
                <span id="message" name="message">
                    {message}
                </span>
            </div>
        </div>
    );
};

export default CreateRoomForm;