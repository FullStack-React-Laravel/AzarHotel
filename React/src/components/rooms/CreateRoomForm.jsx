import { useForm } from "react-hook-form";
import { validateRoomNumber } from "./servicesRoom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewRoomApi } from "../../services/apiRooms";

import Col from "../../ui/Col";
import Button from "../../ui/Button";
import Error from "./Error";
import RowForm from "./RowForm";
import toast from "react-hot-toast";

export default function CreateRoomForm({ showForm, onCloseViewBox }) {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const query = useQueryClient();

    const { mutate: addNewRoom, isLoading: isCreating } = useMutation({
        mutationFn: addNewRoomApi,
        onSuccess: () => {
            showForm();
            query.invalidateQueries({ queryKey: ["rooms"] });
            toast.success("Room added succefully");
        },
    });
    function onSubmit(data) {
        addNewRoom(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-6">
                <Col classes="gap-2">
                    <label htmlFor="roomNumber">Room Number</label>
                    <input
                        {...register("code", {
                            validate: validateRoomNumber,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="roomNumber"
                        type="text"
                    />
                    {errors?.code?.message && (
                        <Error>{errors?.code?.message}</Error>
                    )}
                </Col>
                <RowForm error={errors?.type?.message} name="type">
                    <input
                        {...register("type", {
                            required: "this field is required",
                        })}
                        disabled={isCreating}
                        className="input"
                        id="type"
                        type="text"
                    />
                </RowForm>
                <RowForm error={errors?.capacity?.message} name="capacity">
                    <input
                        {...register("capacity", {
                            required: "this field is required",
                        })}
                        disabled={isCreating}
                        className="input"
                        id="capacity"
                        type="number"
                    />
                </RowForm>
                <RowForm error={errors?.price?.message} name="price">
                    <input
                        {...register("price", {
                            required: "this field is required",
                        })}
                        disabled={isCreating}
                        className="input"
                        id="price"
                        type="number"
                    />
                </RowForm>
                <div className="flex w-full items-center justify-end gap-4">
                    <Button
                        typeOfButton="secondary"
                        onClick={() => onCloseViewBox?.()}
                        type="reset"
                    >
                        Cancel
                    </Button>
                    <Button disabled={isCreating}>Save</Button>
                </div>
            </Col>
        </form>
    );
}
