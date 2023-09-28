import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../services/apiRooms";
export default function Rooms() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["rooms"],
        queryFn: getRooms,
        onError: (error) => {
            console.log(error);
        },
    });

    if (isLoading) return <p>...loading data</p>;

    if (isError) return <p>{error.message}</p>;
    return (
        <>
            <h1 className="text-gray-700 text-4xl">All Rooms</h1>

            {data.map((room) => (
                <p key={room.code}>{room.code}</p>
            ))}
        </>
    );
}
