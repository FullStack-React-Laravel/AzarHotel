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
    // Search
    const search = searchParams.get("search") || "";
    // Pagination
    const pag = searchParams.get("page") || 1;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["rooms", filterValue, sortBy, order, search, pag],
        queryFn: () => getRoomsApi(filterValue, sortBy, order, search, pag),
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });
    return { data, isLoading, isError, error };
}
