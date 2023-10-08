import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TableCell from "./TableCell";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletingRoomApi } from "../services/apiRooms";
import toast from "react-hot-toast";
import Table from "./Table";
import ViewBox from "./ViewBox";
import DeletingConfirm from "./DeletingConfirm";

export default function RoomRow({ room }) {
    const { id: roomId, code, type, capacity, price } = room;
    const query = useQueryClient();

    const { mutate: deletingRoom, isLoading: isDeleting } = useMutation({
        mutationFn: deletingRoomApi,
        onSuccess: () => {
            toast.success("Room succefully deleted");
            query.invalidateQueries({
                queryKey: ["rooms"],
            });
        },
    });

    return (
        <Table.Row>
            <TableCell></TableCell>
            <TableCell>{code}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{capacity}</TableCell>
            <TableCell>{price}&pound;</TableCell>
            <TableCell classes=" flex gap-8 text-xl">
                <FaRegEdit className=" text-gray-700" />
                <ViewBox>
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
                </ViewBox>
            </TableCell>
        </Table.Row>
    );
}
