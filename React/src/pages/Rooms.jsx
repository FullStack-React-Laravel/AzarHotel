import { useGetRooms } from "../hooks/useGetRooms";

import { BiError } from "react-icons/bi";
import Row from "../ui/Row";
import Col from "../ui/Col";
import Spinner from "../ui/Spinner";
import RoomTable from "../components/rooms/RoomTable";
import AddRoomButton from "../components/rooms/AddRoomButton";
import Filter from "../ui/Filter";
import Search from "../ui/Search";

const options = [
    { label: "Silver", value: "silver" },
    { label: "Gold", value: "gold" },
    { label: "Diamond", value: "diamond" },
];

export default function Rooms() {
    const { rooms, isError, isLoading, error } = useGetRooms();

    if (isError) return <p>{error.message}</p>;

    return (
        <Col classes=" relative h-full">
            <Row classes=" mb-16 justify-between">
                <h1 className="text-4xl text-gray-700">All Rooms</h1>
                {isLoading ? null : <AddRoomButton />}
            </Row>
            <Row classes=" w-[700px] mb-4 gap-4">
                <Filter options={options} />
                <Search />
            </Row>

            {isLoading ? (
                <Spinner text="loading rooms table..." />
            ) : (
                <>
                    {!rooms.length ? (
                        <div className=" flex h-full flex-col items-center justify-center text-3xl text-red-500">
                            <BiError />
                            No data in rooms table
                        </div>
                    ) : (
                        <RoomTable rooms={rooms} />
                    )}
                </>
            )}
        </Col>
    );
}

// const [rooms, setRooms] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//     async function getRoom() {
//         setIsLoading(true);
//         const res = await fetch("http://localhost:8000/api/rooms");
//         const data = await res.json();
//         setRooms(data);
//         setIsLoading(false);
//     }
//     getRoom();
// }, []);
