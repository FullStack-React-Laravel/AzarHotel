import Table from "../../ui/Table";
import TableCell from "../../ui/TableCell";
import RoomRow from "../../ui/TableRow";

export default function RoomTable({ rooms }) {
    return (
        <Table columns="grid-cols-[10rem_1fr_1fr_1fr_1fr_1fr]">
            <Table.Header>
                <TableCell></TableCell>
                <TableCell>Room_N</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Price</TableCell>
                <div></div>
            </Table.Header>
            <Table.Body
                data={rooms}
                render={(room) => <RoomRow key={room.code} room={room} />}
            />
        </Table>
    );
}
