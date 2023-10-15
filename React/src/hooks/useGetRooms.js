import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getRoomsApi } from "../services/apiRooms";

export function useGetRooms() {
    const [searchParams] = useSearchParams();

    const filterValue = searchParams.get("type") || "all";

    const {
        data: rooms,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["rooms", filterValue],
        queryFn: () => getRoomsApi(filterValue),
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });
    return { rooms, isLoading, isError, error };
}
