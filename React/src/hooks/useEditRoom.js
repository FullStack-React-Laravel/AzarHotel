import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiRoom } from "../services/apiRooms";

export function useEditRoom(onCloseViewBox) {
    const query = useQueryClient();

    const { mutate: editRoom, isLoading: isEditing } = useMutation({
        mutationFn: ({ room_number, edited_room }) => ApiRoom.update(room_number, edited_room),
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ["rooms"] });
            onCloseViewBox?.();
            toast.success("Room Edited successfully");
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { editRoom, isEditing };
}
