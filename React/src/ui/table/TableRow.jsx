import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteRoom } from "../../hooks/roomsHooks";
import EditRoomForm from "../../components/rooms/EditRoomForm";

// ----------------------------
import TableCell from "./TableCell";
import Button from "../Button";
import Table from "./Table";
import ViewBox from "../ViewBox";
import DeletingConfirm from "../DeletingConfirm";

export default function RoomRow({ roomData, categories }) {
    const room = [roomData.number, roomData.category.name];

    const { deletingRoom, isDeleting } = useDeleteRoom();

    return (
        <Table.Row>
            {room.map(value => <TableCell key={value} classes="capitalize">{value}</TableCell>)}
            <TableCell classes=" flex gap-8 text-xl">
                <ViewBox>
                    {/* ---------- View Box Popup To Edit ---------- */}
                    <ViewBox.Open open="edit">
                        <Button typeOfButton="none">
                            <FaRegEdit className=" h-8 w-8 rounded-md p-1.5 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[450px]" window="edit">
                        <EditRoomForm id={roomData.number} room={roomData} categories={categories} />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}

                    {/* ---------- View Box Popup To Delete ---------- */}
                    <ViewBox.Open open="delete">
                        <Button typeOfButton="none">
                            <MdOutlineDeleteOutline className=" h-8 w-8 rounded-md p-1 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[400px]" window="delete">
                        <DeletingConfirm
                            isDeleting={isDeleting}
                            onDelete={() => deletingRoom(roomData.number)}
                        />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}
                </ViewBox>
            </TableCell>
        </Table.Row>
    );
}
