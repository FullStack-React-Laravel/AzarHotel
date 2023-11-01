import { useForm } from "react-hook-form";
import { validateNumber } from "./servicesRoom";
import { useEditRoom } from "../../hooks/useEditRoom";

// jsx components
import Col from "../../ui/Col";
import Button from "../../ui/Button";
import RowForm from "./RowForm";
import Options from "../../ui/Options";

export default function EditRoomForm({ room, onCloseViewBox }) {
    const { editRoom, isEditing } = useEditRoom(onCloseViewBox);

    // defaults value for inputs and select
    const defValue = {
        number: room.number,
        category: room.category.name,
    };
    const { register, handleSubmit, formState } = useForm({
        defaultValues: defValue,
    });
    const { errors } = formState;

    function onSubmit(data) {
        editRoom({ room_number: room.number, edited_room: data });
    }
    return (
        <form className="px-12 pb-8 pt-12" onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-6">
                <RowForm error={errors?.number?.message} name="Number">
                    <input
                        {...register("number", {
                            validate: validateNumber,
                            disabled: isEditing,
                        })}
                        className="input"
                        id="number"
                    />
                </RowForm>
                <RowForm error={errors?.category?.message} name="Category">
                    <select
                        {...register("category", {
                            disabled: isEditing,
                        })}
                        className="input cursor-pointer"
                        id="category"
                    >
                        <Options />
                    </select>
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
