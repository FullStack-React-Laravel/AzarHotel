import { useGetRooms } from "../hooks/useGetRooms";

import { BiError } from "react-icons/bi";
import Row from "../ui/Row";
import Col from "../ui/Col";
import Spinner from "../ui/Spinner";
import RoomTable from "../components/rooms/RoomTable";
import AddRoomButton from "../components/rooms/AddRoomButton";
import Filter from "../ui/Filter";
import Search from "../ui/Search";
import { useGetCategories } from "../hooks/useGetCategories";

export default function Rooms() {
    const { categories, categoriesIsError, categoriesIsLoading, categoriesError } = useGetCategories();
    const { rooms, roomsIsError, roomsIsLoading, roomsError } = useGetRooms();

    if (categoriesIsError) return <p>categories: {categoriesError.message}</p>;
    if (roomsIsError) return <p>rooms: {roomsError.message}</p>;

    const options = categories?.map(c => ({ label: c.name, value: c.slug }));

    return (
        <Col classes=" relative h-full">
            {
                categoriesIsLoading ? (<Spinner text="loading rooms table..." />) : (
                    <>
                        <Row classes=" mb-16 justify-between">
                            <h1 className="text-4xl text-gray-700">All Rooms</h1>
                            {roomsIsLoading ? null : <AddRoomButton categories={categories} />}
                        </Row>
                        <Row classes=" w-[700px] mb-4 gap-4">
                            <Filter options={options} />
                            <Search />
                        </Row>
                        {
                            roomsIsLoading ? (<Spinner text="loading rooms table..." />) : (
                                <>
                                    {
                                        !rooms?.data.length ? (
                                            <div className=" flex h-full flex-col items-center justify-center text-3xl text-red-500">
                                                <BiError />
                                                No data in rooms table
                                            </div>
                                        ) : (<RoomTable data={rooms} categories={categories ?? []} />)
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </Col>
    );
}
