import { useGetAllRooms } from "../components/rooms/hooks/useGetAllRooms";

import Row from "../ui/Row";

import Col from "../ui/Col";
import Spinner from "../ui/Spinner";
import AddRoom from "../components/rooms/AddRoom";
import RoomTable from "../components/rooms/RoomTable";

export default function Rooms() {
    const { rooms, isError, isLoading, error } = useGetAllRooms();

    if (isError) return <p>{error.message}</p>;

    return (
        <Col classes="gap-12 min-h-screen relative">
            {isLoading ? (
                <Spinner text="loading rooms..." />
            ) : (
                <>
                    <Row>
                        <h1 className="text-4xl text-gray-700">All Rooms</h1>
                        <AddRoom />
                    </Row>
                    <RoomTable rooms={rooms} />
                </>
            )}
        </Col>
    );
}
