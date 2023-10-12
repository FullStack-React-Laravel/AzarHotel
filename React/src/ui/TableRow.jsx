import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TableCell from "./TableCell";
import Button from "./Button";
import Table from "./Table";
import ViewBox from "./ViewBox";
import DeletingConfirm from "./DeletingConfirm";
import CreateRoomForm from "../components/rooms/CreateRoomForm";
import useDeleteRoom from "../components/rooms/hooks/useDeleteRoom";

export default function RoomRow({ room }) {
    let { id: roomId, room_number, type, capacity, price } = room;
    const { deletingRoom, isDeleting } = useDeleteRoom();

    return (
        <Table.Row>
            <TableCell></TableCell>
            <TableCell>{room_number}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{capacity}</TableCell>
            <TableCell>{price}&pound;</TableCell>
            <TableCell classes=" flex gap-8 text-xl">
                <ViewBox>
                    {/* ---------- View Box Popop To Edit ---------- */}
                    <ViewBox.Open open="edit">
                        <Button typeOfButton="none">
                            <FaRegEdit className=" text-gray-700" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[450px]" window="edit">
                        <CreateRoomForm id={roomId} room={room} />
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
                            onDelete={() => deletingRoom(roomId)}
                        />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}
                </ViewBox>
            </TableCell>
        </Table.Row>
    );
}
