import Table from "../../ui/Table";
import TableCell from "../../ui/TableCell";
import TableHeader from "../../ui/TableHeader";
import TableRow from "../../ui/TableRow";

export default function RoomTable({ rooms }) {
    return (
        <Table>
            <TableHeader>
                <TableCell></TableCell>
                <TableCell>Room_N</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Price</TableCell>
                <div></div>
            </TableHeader>
            {rooms.map((room) => (
                <TableRow key={room.code} room={room} />
            ))}
        </Table>
    );
}
