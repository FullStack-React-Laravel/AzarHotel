import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDeleteRoom } from "../../hooks/roomsHooks";
import EditRoomForm from "./EditRoomForm";

// ----------------------------
import ViewBox from "../../ui/ViewBox";
import DeletingConfirm from "../../ui/DeletingConfirm";
import TableCell from "../../ui/table/TableCell";
import Button from "../../ui/Button";
import Table from "../../ui/table/Table";
import BoxTooltip from "../../ui/tooltiop/BoxTooltip";
import CategoryBox from "../categories/CategoryBoxTooltip";

export default function RoomRow({ roomData, ind }) {
    const { number: roomNumber, category } = roomData;
    const { deletingRoom, isDeleting } = useDeleteRoom();

    return (
        <Table.Row>
            <TableCell>{roomNumber}</TableCell>
            <BoxTooltip toolTip={<CategoryBox category={category} />}>
                <TableCell>{category.name}</TableCell>
            </BoxTooltip>
            <TableCell classes=" flex gap-8 text-xl">
                <ViewBox>
                    {/* ---------- View Box Popup To Edit ---------- */}
                    <ViewBox.Open open="edit">
                        <Button typeOfButton="none">
                            <FaRegEdit className=" h-8 w-8 rounded-md p-1.5 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white" />
                        </Button>
                    </ViewBox.Open>
                    <ViewBox.Window width="w-[450px]" window="edit">
                        <EditRoomForm
                            id={roomNumber}
                            roomNumber={roomNumber}
                            category={category.name}
                        />
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
                            onDelete={() => deletingRoom(roomNumber)}
                        />
                    </ViewBox.Window>
                    {/* ---------------------------------------- */}
                </ViewBox>
            </TableCell>
        </Table.Row>
    );
}
