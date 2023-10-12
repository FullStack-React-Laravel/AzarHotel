import useAddNewRoom from "./hooks/useAddNewRoom";
import { useForm } from "react-hook-form";
import {
    validateCapacity,
    validateNumber,
    validatePrice,
    validateType,
} from "./servicesRoom";

// jsx components
import Col from "../../ui/Col";
import Button from "../../ui/Button";
import RowForm from "./RowForm";

export default function CreateRoomForm({ id: idToEdit, room, onCloseViewBox }) {
    const { addNewRoom, isCreating } = useAddNewRoom(onCloseViewBox);

    const isEditing = Boolean(idToEdit);
    let roomData = isEditing ? { ...room } : {};

    // check if room exist to edit and if exist convert number to string to avoid error in validate
    if (isEditing) {
        roomData.price = roomData.price.toString();
        roomData.capacity = roomData.capacity.toString();
    }

    const { register, handleSubmit, formState } = useForm({
        defaultValues: roomData,
    });
    const { errors } = formState;

    function onSubmit(data) {
        if (isEditing) {
            console.log(data);
        } else {
            addNewRoom(data);
        }
    }

    return (
        <form className="px-12 pb-8 pt-12" onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-6">
                <RowForm
                    error={errors?.room_number?.message}
                    name="room_number"
                >
                    <input
                        {...register("room_number", {
                            validate: validateNumber,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="room_number"
                    />
                </RowForm>
                <RowForm error={errors?.type?.message} name="type">
                    <input
                        {...register("type", { validate: validateType })}
                        disabled={isCreating}
                        className="input"
                        id="type"
                    />
                </RowForm>
                <RowForm error={errors?.capacity?.message} name="capacity">
                    <input
                        {...register("capacity", {
                            validate: validateCapacity,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="capacity"
                    />
                </RowForm>
                <RowForm error={errors?.price?.message} name="price">
                    <input
                        {...register("price", {
                            validate: validatePrice,
                        })}
                        disabled={isCreating}
                        className="input"
                        id="price"
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
