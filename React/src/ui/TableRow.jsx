import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TableCell from "./TableCell";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletingRoomApi } from "../services/apiRooms";
import toast from "react-hot-toast";

export default function TableRow({ room }) {
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
        <div
            className={`grid grid-cols-[10rem_1fr_1fr_1fr_1fr_1fr] border-b border-b-gray-100 ${
                type === "Gold" ? "font-bold text-indigo-600" : "text-gray-600"
            } `}
            rol="row"
        >
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
        </div>
    );
}
