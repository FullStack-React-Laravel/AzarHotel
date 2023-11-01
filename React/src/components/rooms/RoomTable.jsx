import { BiError } from "react-icons/bi";
import { useRooms } from "../../context/RoomsContext";
import Sort from "../../ui/Sort";
import Pagination from "../../ui/table/Pagination";
import Table from "../../ui/table/Table";
import TableCell from "../../ui/table/TableCell";
import RoomRow from "../../ui/table/TableRow";

export default function RoomTable() {
    const { rooms } = useRooms();
    const roomsData = rooms.data;
    const header = Object.keys(rooms.data.at(0));

    return (
        <>
            {!rooms?.data.length ? (
                <div className=" flex h-full flex-col items-center justify-center text-3xl text-red-500">
                    <BiError />
                    No data in rooms table
                </div>
            ) : (
                <Table columns="grid-cols-[1fr_1fr_1fr_1fr_100px]">
                    <Table.Header>
                        {header.map((header) => {
                            return (
                                <Sort sortBy={header} key={header}>
                                    <TableCell classes=" capitalize">
                                        {header.split("_").join(" ")}
                                    </TableCell>
                                </Sort>
                            );
                        })}
                    </Table.Header>
                    <Table.Body>
                        {roomsData.map((room) => (
                            <RoomRow
                                key={room.number}
                                roomData={room}
                                category={room.category}
                            />
                        ))}
                    </Table.Body>

                    <Table.Footer>
                        <Pagination data={rooms} />
                    </Table.Footer>
                </Table>
            )}
        </>
    );
}
