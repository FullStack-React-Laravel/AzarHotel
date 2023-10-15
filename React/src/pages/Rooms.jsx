import Row from "../ui/Row";

import Col from "../ui/Col";
import Spinner from "../ui/Spinner";

import RoomTable from "../components/rooms/RoomTable";

import AddRoomButton from "../components/rooms/AddRoomButton";
import Filter from "../ui/Filter";
import { useGetRooms } from "../hooks/useGetRooms";

const options = [
    { label: "Silver", value: "silver" },
    { label: "Gold", value: "gold" },
    { label: "Diamond", value: "diamond" },
];

export default function Rooms() {
    const { rooms, isError, isLoading, error } = useGetRooms();
    if (isError) return <p>{error.message}</p>;

    return (
        <Col>
            <Row classes=" mb-16">
                <h1 className="text-4xl text-gray-700">All Rooms</h1>
                {isLoading ? null : <AddRoomButton />}
            </Row>
            <Filter options={options} />

            {isLoading ? (
                <Spinner text="loading rooms..." />
            ) : (
                <>
                    <RoomTable rooms={rooms} />
                </>
            )}
        </Col>
    );
}
