import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getRoomsApi } from "../services/apiRooms";

export function useGetRooms() {
    const [searchParams] = useSearchParams();
    // Filter
    const filterValue = `types=${searchParams.get("type") || "all"}`;

    // Sort
    const sortBy = searchParams.get("sort") || "id";
    const order = searchParams.get("order") || "desc";

    const {
        data: rooms,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["rooms", filterValue, sortBy, order],
        queryFn: () => getRoomsApi(filterValue, sortBy, order),
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });
    return { rooms, isLoading, isError, error };
}
