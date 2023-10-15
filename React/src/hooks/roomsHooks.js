import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    addNewRoomApi,
    deletingRoomApi,
    editRoomApi,
} from "../services/apiRooms";
import toast from "react-hot-toast";

//------------------------------------------------------

//------------------------------------------------------

export function useAddNewRoom(onCloseViewBox, idToEdit, room) {
    const query = useQueryClient();
    const { mutate: addNewRoom, isLoading: isCreating } = useMutation({
        mutationFn: addNewRoomApi,
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ["rooms"] });
            onCloseViewBox?.();
            toast.success("Room added succefully");
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { addNewRoom, isCreating };
}

export function useEditRoom(onCloseViewBox, room) {
    const query = useQueryClient();

    const { mutate: editRoom, isLoading: idEditing } = useMutation({
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

    return { editRoom, idEditing };
}
//------------------------------------------------------

export function useDeleteRoom() {
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
