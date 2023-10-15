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

    const tableCells = Object.keys(room)
        .filter((key) => key !== "id")
        .map((key) => {
            return key === "capacity" ? (
                <TableCell key={key}>
                    Enough for <span className=" font-bold ">{room[key]}</span>{" "}
                    people
                </TableCell>
            ) : (
                <TableCell key={key}>
                    {key === "price" ? `${room[key]}£` : room[key]}
                </TableCell>
            );
        });

    return (
        <Table.Row>
            {tableCells}
            <TableCell classes=" flex gap-8 text-xl">
                <ViewBox>
                    {/* ---------- View Box Popop To Edit ---------- */}
                    <ViewBox.Open open="edit">
                        <Button typeOfButton="none">
                            <FaRegEdit className=" h-8 w-8 rounded-md p-1.5 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[450px]" window="edit">
                        <EditRoomForm id={room.id} room={room} />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}

                    {/* ---------- View Box Popop To Delete ---------- */}
                    <ViewBox.Open open="delete">
                        <Button typeOfButton="none">
                            <MdOutlineDeleteOutline className=" h-8 w-8 rounded-md p-1 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white" />
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
