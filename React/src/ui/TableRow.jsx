import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TableCell from "./TableCell";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletingRoomApi } from "../services/apiRooms";
import toast from "react-hot-toast";
import Table from "./Table";

export default function RoomRow({ room }) {
    const { id, code, type, capacity, price } = room;
    const query = useQueryClient();

    const { mutate: deletingRoom, isLoading } = useMutation({
        mutationFn: deletingRoomApi,
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ["rooms"],
            });
            toast.success("Room succefully deleted");
        },
    });

    if (isLoading) return <p>...deleting Room</p>;
    return (
        <Table.Row>
            <TableCell></TableCell>
            <TableCell>{code}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{capacity}</TableCell>
            <TableCell>{price}&pound;</TableCell>
            <TableCell classes=" flex gap-8 text-xl">
                <FaRegEdit className=" text-gray-700" />
                <Button onClick={() => deletingRoom(id)} typeOfButton="none">
                    <MdOutlineDeleteOutline className=" text-red-500" />
                </Button>
            </TableCell>
        </Table.Row>
    );
}
