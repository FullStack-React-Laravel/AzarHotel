import { useState } from "react";
import Button from "../../ui/Button";
import ViewBox from "../../ui/ViewBox";
import CreateRoomForm from "./CreateRoomForm";

export default function AddRoom() {
    const [roomWindow, setRoomWindow] = useState("roomForm");
    function handleRoomWindow() {
        if (roomWindow === "") setRoomWindow("roomForm");
        else setRoomWindow("");
    }
    return (
        <ViewBox>
            <ViewBox.Open open="roomForm">
                <Button>Add Room</Button>
            </ViewBox.Open>
            <ViewBox.Window window={roomWindow} width="w-[500px]">
                <CreateRoomForm showForm={handleRoomWindow} />
            </ViewBox.Window>
        </ViewBox>
    );
}
