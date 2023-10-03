import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../../services/apiRooms";

export function useGetAllRooms() {
    const {
        data: rooms,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["rooms"],
        queryFn: getRooms,
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });

    return { rooms, isLoading, isError, error };
}
