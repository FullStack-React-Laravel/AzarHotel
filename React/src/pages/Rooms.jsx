import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../services/apiRooms";
// import { useEffect, useState } from "react";

import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";
import TableRow from "../ui/TableRow";
import TableCell from "../ui/TableCell";
import Row from "../ui/Row";
import Button from "../ui/Button";

export default function Rooms() {
    // const [rooms, setRooms] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    const {
        data: rooms,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["rooms"],
        queryFn: getRooms,
        onError: (error) => {
            console.log(error);
        },
    });

    if (isError) return <p>{error.message}</p>;
    if (isLoading) return <p>...loading data</p>;

    // useEffect(() => {
    //     async function getRooms() {
    //         setLoading(true);
    //         const res = await fetch("http://localhost:8000/api/rooms", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 // "X-CSRF-Token": document.querySelector('input[name=_token]').value
    //             },
    //         });
    //         if (!res.ok) {
    //             throw new Error(`cant get rooms`);
    //         }
    //         const data = await res.json();
    //         setRooms(data);
    //         setLoading(false);
    //     }
    //     getRooms();
    // }, []);
    if (isLoading) return <p>loading...</p>;
    return (
        <>
            <Row>
                <h1 className="text-4xl text-gray-700">All Rooms</h1>
                <Button>Add Room</Button>
            </Row>

            <Table classes="mt-20">
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
        </>
    );
}
