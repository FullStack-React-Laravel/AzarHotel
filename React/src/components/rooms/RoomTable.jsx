import Sort from "../../ui/Sort";
import Table from "../../ui/table/Table";
import TableCell from "../../ui/table/TableCell";
import RoomRow from "../../ui/table/TableRow";

export default function RoomTable({ rooms }) {
    const headers = Object.keys(rooms.at(0)).filter(
        (header) => header !== "id",
    );

    return (
        <Table columns="grid-cols-[1fr_1fr_1fr_1fr_100px]">
            <Table.Header>
                {headers.map((header) => {
                    return (
                        <Sort sortBy={header} key={header}>
                            <TableCell classes=" capitalize">
                                {header.split("_").join(" ")}
                            </TableCell>
                        </Sort>
                    );
                })}
            </Table.Header>
            <Table.Body
                data={rooms}
                render={(room) => (
                    <RoomRow key={room.room_number} room={room} />
                )}
            />
        </Table>
    );
}
