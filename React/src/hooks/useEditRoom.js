import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editRoomApi } from "../services/apiRooms";

export function useEditRoom(onCloseViewBox, room) {
    const query = useQueryClient();

    const { mutate: editRoom, isLoading: isEditing } = useMutation({
        mutationFn: editRoomApi,
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ["rooms"] });
            onCloseViewBox?.();
            toast.success("Room Edited succefully");
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { editRoom, isEditing };
}
