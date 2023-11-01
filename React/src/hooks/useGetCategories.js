import { useQuery } from "@tanstack/react-query";
import { ApiCategory } from "../services/apiCategories";

export function useGetCategories() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: ApiCategory.index,
        retry: false,
        onError: (error) => {
            console.log(error);
        },
    });
    return {
        categories: data,
        categoriesIsLoading: isLoading,
        categoriesIsError: isError,
        categoriesError: error,
    };
}
