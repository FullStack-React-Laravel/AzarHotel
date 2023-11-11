import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiRoom } from "../services/apiRooms";
import toast from "react-hot-toast";

//------------------------------------------------------

export function useAddNewRoom(onCloseViewBox, room) {
    const query = useQueryClient();
    const { mutate: addNewRoom, isLoading: isCreating } = useMutation({
        mutationFn: ApiRoom.store,
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ["rooms"] });
            onCloseViewBox?.();
            toast.success("Room added successfully");
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { addNewRoom, isCreating };
}

//------------------------------------------------------

export function useDeleteRoom() {
    const query = useQueryClient();

    const { mutate: deletingRoom, isLoading: isDeleting } = useMutation({
        mutationFn: ApiRoom.destroy,
        onSuccess: () => {
            toast.success("Room successfully deleted");
            query.invalidateQueries({ queryKey: ["rooms"], });
        },
        onError: () => {
            toast.error("Room could not deleted");
        },
    });

    return { deletingRoom, isDeleting };
}
