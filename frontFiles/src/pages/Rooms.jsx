import Row from "../ui/Row";
import Col from "../ui/Col";
import Spinner from "../ui/Spinner";
import RoomTable from "../components/rooms/RoomTable";
import AddRoomButton from "../components/rooms/AddRoomButton";
import Filter from "../ui/Filter";
import Search from "../ui/Search";

import { useRooms } from "../context/RoomsContext";

export default function Rooms() {
    const {
        roomsIsError,
        roomsIsLoading,
        roomsError,
        categories,
        categoriesIsError,
        categoriesIsLoading,
        categoriesError,
    } = useRooms();

    if (roomsIsError) return <p>rooms: {roomsError.message}</p>;
    if (categoriesIsError) return <p>categories: {categoriesError.message}</p>;

    const options = categories?.map((c) => ({ label: c.name, value: c.slug }));

    return (
        <Col classes=" relative h-full">
            <Row classes=" mb-16 justify-between">
                <h1 className="text-4xl text-gray-700">All Rooms</h1>
                {roomsIsLoading ? null : <AddRoomButton />}
            </Row>
            <Row classes=" w-[700px] mb-4 gap-4">
                <Filter options={options} />
                <Search />
            </Row>
            {categoriesIsLoading || roomsIsLoading ? (
                <Spinner text="loading rooms table..." />
            ) : (
                <RoomTable />
            )}
        </Col>
    );
}



