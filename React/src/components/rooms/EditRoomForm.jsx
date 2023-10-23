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
import { useEditRoom } from "../../hooks/useEditRoom";

export default function EditRoomForm({ room, onCloseViewBox }) {
    const { editRoom, isEditing } = useEditRoom(onCloseViewBox);
    console.log(isEditing);
    room.price = room.price.toString();
    room.capacity = room.capacity.toString();

    const { register, handleSubmit, formState } = useForm({
        defaultValues: room,
    });
    const { errors } = formState;

    function onSubmit(data) {
        editRoom(data);
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
                        disabled={isEditing}
                        className="input"
                        id="room_number"
                    />
                </RowForm>
                <RowForm error={errors?.type?.message} name="type">
                    <input
                        {...register("type", { validate: validateType })}
                        disabled={isEditing}
                        className="input"
                        id="type"
                    />
                </RowForm>
                <RowForm error={errors?.capacity?.message} name="capacity">
                    <input
                        {...register("capacity", {
                            validate: validateCapacity,
                        })}
                        disabled={isEditing}
                        className="input"
                        id="capacity"
                    />
                </RowForm>
                <RowForm error={errors?.price?.message} name="price">
                    <input
                        {...register("price", {
                            validate: validatePrice,
                        })}
                        disabled={isEditing}
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
                    <Button disabled={isEditing}>Edit</Button>
                </div>
            </Col>
        </form>
    );
}
