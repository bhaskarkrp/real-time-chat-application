import React from "react";
import RoomCard from "./RoomCard";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/roomCard.scss";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/features/user/userSlice";
import { signOut } from "../../api/baseURL";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    const user = localStorage.getItem("loggedIn");

    if (!user) {
      navigate("/login");
    } else {
      const { id } = JSON.parse(user);
      dispatch(
        fetchUser({
          userId: id,
        })
      );
    }
  }, []);

  const signOutHandler = () => {
    signOut();
    navigate("/login");
  };

  const addRoomHandler = () => {
    console.log('Add Room button clicked')
  }

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="Avatar">
          <h3>Chat Application</h3>
          <h4>{(state.user.data && state.user.data.name) || ""}</h4>
          <button onClick={addRoomHandler}>{state.user.data && "Add Room"}</button>
          <p style={{ cursor: "pointer" }} onClick={signOutHandler}>
            {state.user.data.name ? "Sign Out" : ""}
          </p>
        </div>
      </div>
      <div className="room">
        {state.user.data.room && state.user.data.room.length ? (
          state.user.data.room.map((room) => {
            return <RoomCard key={room._id} room={room} />;
          })
        ) : (
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            No room found
          </h3>
        )}
      </div>
    </div>
  );
}

export default SideBar;
