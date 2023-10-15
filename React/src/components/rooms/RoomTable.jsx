import Table from "../../ui/Table";
import TableCell from "../../ui/TableCell";
import RoomRow from "../../ui/TableRow";

export default function RoomTable({ rooms }) {
    const headers = Object.keys(rooms.at(0)).filter(
        (header) => header !== "id",
    );

    const finalHeaders = headers.map((header) => header.split("_").join(" "));

    return (
        <Table columns="grid-cols-[1fr_1fr_1fr_1fr_100px]">
            <Table.Header>
                {finalHeaders.map((header) => {
                    return (
                        <TableCell classes=" capitalize" key={header}>
                            {header}
                        </TableCell>
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
