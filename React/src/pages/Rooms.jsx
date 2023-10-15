import Row from "../ui/Row";

import Col from "../ui/Col";
import Spinner from "../ui/Spinner";

import RoomTable from "../components/rooms/RoomTable";
import { useGetAllRooms } from "../hooks/roomsHooks";
import AddRoomButton from "../components/rooms/AddRoomButton";
import Filter from "../ui/Filter";

const options = [
    { type: "filter", value: "all" },
    { type: "filter", value: "silver" },
    { type: "filter", value: "gold" },
    { type: "filter", value: "diamond" },
];

export default function Rooms() {
    const { rooms, isError, isLoading, error } = useGetAllRooms();
    if (isError) return <p>{error.message}</p>;

    return (
        <Col>
            {isLoading ? (
                <Spinner text="loading rooms..." />
            ) : (
                <>
                    <Row classes=" mb-12">
                        <h1 className="text-4xl text-gray-700">All Rooms</h1>
                        <AddRoomButton />
                    </Row>
                    <Filter options={options} />
                    <RoomTable rooms={rooms} />
                </>
            )}
        </Col>
    );
}
