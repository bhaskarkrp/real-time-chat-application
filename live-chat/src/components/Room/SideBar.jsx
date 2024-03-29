import React from "react";
import RoomCard from "./RoomCard";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/roomCard.scss";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/features/user/userSlice";
import { signOut } from "../../api/baseURL";
import AddRoomForm from "./AddRoomForm";
import BasicModal from "../generics/BasicModal";
import CreateRoomForm from "./CreateRoomForm";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const [openModal, setOpenModal] = React.useState(false);
  const [openCreateRoom, setOpenCreateRoom] = React.useState(false);

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
    setOpenModal(true);
    console.log('Add Room button clicked')
  }

  const createRoomHandler = () => {
    setOpenCreateRoom(true);
    console.log("Create room button clicked!")
  }

  return (
    <div className="sidebar">
      <BasicModal open={openModal} setOpen={setOpenModal} Component={<AddRoomForm />} />
      <BasicModal open={openCreateRoom} setOpen={setOpenCreateRoom} Component={<CreateRoomForm />} />
      <div className="profile">
        <div className="Avatar">
          <h3>Chat Application</h3>
          <h4>{(state.user.data && state.user.data.name) || ""}</h4>
          <button className="button-chat" style={{ paddingTop: "6px", paddingBottom: "6px" }} onClick={addRoomHandler}>{state.user.data && "Add Room"}</button>
          <button className="button-chat" style={{ paddingTop: "6px", paddingBottom: "6px" }} onClick={createRoomHandler}>{state.user.data && 'Create Room'}</button>
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
