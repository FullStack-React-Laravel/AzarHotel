import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNewRoomApi } from "../../../services/apiRooms";

export default function useAddNewRoom(onCloseViewBox) {
    const query = useQueryClient();

    const { mutate: addNewRoom, isLoading: isCreating } = useMutation({
        mutationFn: addNewRoomApi,
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ["rooms"] });
            onCloseViewBox();
            toast.success("Room added succefully");
        },
    });

    return { addNewRoom, isCreating };
}
