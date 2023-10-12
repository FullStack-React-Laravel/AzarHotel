import Button from "../../ui/Button";
import ViewBox from "../../ui/ViewBox";
import CreateRoomForm from "./CreateRoomForm";

export default function AddRoomButton() {
    return (
        <ViewBox>
            <ViewBox.Open open="addRoom">
                <Button>Add Room</Button>
            </ViewBox.Open>
            <ViewBox.Window window="addRoom" width="w-[450px]">
                <CreateRoomForm />
            </ViewBox.Window>
        </ViewBox>
    );
}
