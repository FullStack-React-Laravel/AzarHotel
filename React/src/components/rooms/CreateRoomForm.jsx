import { useAddNewRoom } from "../../hooks/roomsHooks";

import { useForm } from "react-hook-form";
import { validateNumber } from "./servicesRoom";

// jsx components
import Col from "../../ui/Col";
import Button from "../../ui/Button";
import RowForm from "./RowForm";

export default function CreateRoomForm({ attr, onCloseViewBox, categories }) {
    const { addNewRoom, isCreating } = useAddNewRoom(onCloseViewBox);
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    function onSubmit(data) {
        addNewRoom(data);
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
                        disabled={isCreating}
                        className="input"
                        id="number"
                    />
                </RowForm>
                <RowForm
                    error={errors?.category?.message}
                    name="Category"
                >
                    <select
                        {...register("category")}
                        id="category"
                        className="input"
                        disabled={isCreating}
                    >
                        {categories.map(category => <option className="capitalize" value={category.slug} key={category.slug}>{category.name}</option>)}
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
                    <Button disabled={isCreating}>Save</Button>
                </div>
            </Col>
        </form>
    );
}
