import { useForm } from "react-hook-form";
import { validateRoomNumber } from "./servicesRoom";

import Col from "../../ui/Col";
import Button from "../../ui/Button";
import Error from "./Error";
import RowForm from "./RowForm";

import useAddNewRoom from "./hooks/useAddNewRoom";

export default function CreateRoomForm({
    id: idToEdit,
    room,

    onCloseViewBox,
}) {
    const isEditing = Boolean(idToEdit);
    const roomData = isEditing ? { ...room } : {};
    const { addNewRoom, isCreating } = useAddNewRoom();

    const { register, handleSubmit, formState } = useForm({
        defaultValues: roomData,
    });
    const { errors } = formState;
    console.log(errors);
    function onSubmit(data) {
        if (isEditing) {
            console.log(data);
        } else addNewRoom(data);
    }

    return (
        <form className="px-12 pb-8 pt-12" onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-6">
                {/* <Col classes="gap-2">
                    <label htmlFor="room_number">Room Number</label>
                    <input
                        {...register("room_number", {
                            validate: validateRoomNumber,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="room_number"
                        type="text"
                    />
                    {errors?.code?.message && (
                        <Error>{errors?.code?.message}</Error>
                    )}
                </Col> */}
                <RowForm error={errors?.room_number?.message} name="room_number">
                    <input
                        {...register("room_number", {
                            required: "this field is required",
                            validate: validateRoomNumber,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="room_number"
                        type="text"
                    />
                </RowForm>
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
                <div className="mt-4 flex w-full items-center justify-end gap-4">
                    <Button
                        typeOfButton="secondary"
                        onClick={() => onCloseViewBox?.()}
                        type="reset"
                    >
                        Cancel
                    </Button>
                    <Button disabled={isCreating}>
                        {isEditing ? "Edit" : "Save"}
                    </Button>
                </div>
            </Col>
        </form>
    );
}
