import { useForm } from "react-hook-form";
import { validateNumber } from "./servicesRoom";

// jsx components
import Col from "../../ui/Col";
import Button from "../../ui/Button";
import RowForm from "./RowForm";
import { useEditRoom } from "../../hooks/useEditRoom";

export default function EditRoomForm({ room, onCloseViewBox, categories }) {
    const { editRoom, isEditing } = useEditRoom(onCloseViewBox);

    const { register, handleSubmit, formState } = useForm({ defaultValues: room });
    const { errors } = formState;

    function onSubmit(data) {
        editRoom({ room_number: room.number, edited_room: data });
    }

    return (
        <form className="px-12 pb-8 pt-12" onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-6">
                <RowForm
                    error={errors?.number?.message}
                    name="Number"
                >
                    <input
                        {...register("number", {
                            validate: validateNumber,
                        })}
                        disabled={isEditing}
                        className="input"
                        id="number"
                    />
                </RowForm>
                <RowForm error={errors?.category?.message} name="Category">
                    <select
                        {...register("category")}
                        disabled={isEditing}
                        className="input"
                        id="category"
                    >
                        {
                            categories.map(
                                category =>
                                    <option
                                        key={category.slug}
                                        className="capitalize"
                                        value={category.slug}
                                        selected={room.category === category.slug}
                                    >
                                        {category.name}
                                    </option>
                            )}
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
