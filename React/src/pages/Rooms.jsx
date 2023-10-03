import { useGetAllRooms } from "../components/rooms/hooks/useGetAllRooms";

import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";
import TableRow from "../ui/TableRow";
import TableCell from "../ui/TableCell";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Col from "../ui/Col";
import Spinner from "../ui/Spinner";
import CreateRoomForm from "../components/rooms/CreateRoomForm";
import ViewBox from "../ui/ViewBox";

import { useState } from "react";

export default function Rooms() {
    const [showForm, setShowForm] = useState(false);
    const { rooms, isError, isLoading, error } = useGetAllRooms();

    if (isError) return <p>{error.message}</p>;

    if (isLoading) return <Spinner text="loading rooms..." />;
    return (
        <>
            <Col classes="gap-12">
                <Row>
                    <h1 className="text-4xl text-gray-700">All Rooms</h1>
                    <Button onClick={() => setShowForm(true)}>Add Room</Button>
                </Row>
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
            </Col>
            {showForm && (
                <ViewBox onClose={() => setShowForm(false)}>
                    <CreateRoomForm />
                </ViewBox>
            )}
        </>
    );
}
