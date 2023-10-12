import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteRoom } from "../hooks/roomsHooks";
import EditRoomForm from "../components/rooms/EditRoomForm";

// ----------------------------
import TableCell from "./TableCell";
import Button from "./Button";
import Table from "./Table";
import ViewBox from "./ViewBox";
import DeletingConfirm from "./DeletingConfirm";

export default function RoomRow({ room }) {
    // let { id: roomId, room_number, type, capacity, price } = room;
    const { deletingRoom, isDeleting } = useDeleteRoom();

    return (
        <Table.Row>
            {Object.keys(room)
                .filter((key) => key !== "id")
                .map((key) => (
                    <TableCell>
                        {room[key] + (key === "price" ? "£" : "")}
                    </TableCell>
                ))}

            <TableCell classes=" flex gap-8 text-xl">
                <ViewBox>
                    {/* ---------- View Box Popop To Edit ---------- */}
                    <ViewBox.Open open="edit">
                        <Button typeOfButton="none">
                            <FaRegEdit className=" text-gray-700" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[450px]" window="edit">
                        <EditRoomForm id={room.id} room={room} />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}

                    {/* ---------- View Box Popop To Delete ---------- */}
                    <ViewBox.Open open="delete">
                        <Button typeOfButton="none">
                            <MdOutlineDeleteOutline className=" text-red-500" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[400px]" window="delete">
                        <DeletingConfirm
                            isDeleting={isDeleting}
                            onDelete={() => deletingRoom(room.id)}
                        />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}
                </ViewBox>
            </TableCell>
        </Table.Row>
    );
}
