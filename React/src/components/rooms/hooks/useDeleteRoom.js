import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletingRoomApi } from "../../../services/apiRooms";
import toast from "react-hot-toast";

export default function useDeleteRoom() {
    const query = useQueryClient();

    const { mutate: deletingRoom, isLoading: isDeleting } = useMutation({
        mutationFn: deletingRoomApi,
        onSuccess: () => {
            toast.success("Room succefully deleted");
            query.invalidateQueries({
                queryKey: ["rooms"],
            });
        },
        onError: () => {
            toast.error("Room could not deleted");
        },
    });

    return { deletingRoom, isDeleting };
}
