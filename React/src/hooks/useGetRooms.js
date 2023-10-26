import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { ApiRoom } from "../services/apiRooms";

export function useGetRooms() {
    const [searchParams] = useSearchParams();
    // Filter
    const categories = searchParams.get("type") || "all";
    // Sort
    const sort = searchParams.get("sort") || "id";
    const order = searchParams.get("order") || "desc";
    // Search
    const search = searchParams.get("search") || "";
    // Pagination
    const page = searchParams.get("page") || 1;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["rooms", categories, sort, order, search, page],
        queryFn: () => ApiRoom.index({
            categories, sort, order, search, page
        }),
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });
    return { rooms: data, roomsIsLoading: isLoading, roomsIsError: isError, roomsError: error };
}
