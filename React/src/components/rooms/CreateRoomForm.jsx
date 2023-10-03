import { useForm } from "react-hook-form";
import { validateRoomNumber } from "./servicesRoom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewRoomApi } from "../../services/apiRooms";

import React from "react";
import Col from "../../ui/Col";
import Button from "../../ui/Button";
import Error from "./Error";
import Spinner from "../../ui/Spinner";

export default function CreateRoomForm() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    const queryClient = useQueryClient();

    const { mutate: addNewRoom, isLoading: isCreating } = useMutation({
        mutationFn: addNewRoomApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
    });
    function onSubmit(data) {
        addNewRoom(data);
    }
    if (isCreating) return <Spinner />;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Col classes="gap-4">
                <Col classes="gap-2">
                    <label htmlFor="roomNumber">Room Number</label>
                    <input
                        {...register("code", {
                            validate: validateRoomNumber,
                        })}
                        className="input"
                        id="roomNumber"
                        type="text"
                    />
                    {errors?.code?.message && (
                        <Error>{errors?.code?.message}</Error>
                    )}
                </Col>
                <Col classes="gap-2">
                    <label htmlFor="type">Type</label>
                    <input
                        {...register("type", {
                            required: "this field is required",
                        })}
                        className="input"
                        id="type"
                        type="text"
                    />
                    {errors?.type?.message && (
                        <Error>{errors?.type?.message}</Error>
                    )}
                </Col>
                <Col classes="gap-2">
                    <label htmlFor="capacity">Capacity</label>
                    <input
                        {...register("capacity", {
                            required: "this field is required",
                        })}
                        className="input"
                        id="capacity"
                        type="number"
                    />
                    {errors?.capacity?.message && (
                        <Error>{errors?.capacity?.message}</Error>
                    )}
                </Col>
                <Col classes="gap-2">
                    <label htmlFor="price">Price</label>
                    <input
                        {...register("price", {
                            required: "this field is required",
                        })}
                        className="input"
                        id="price"
                        type="number"
                    />
                    {errors?.price?.message && (
                        <Error>{errors?.price?.message}</Error>
                    )}
                </Col>
                <div className="flex w-full items-center justify-end gap-4">
                    <Button typeOfButton="secondary" onClick={() => reset()}>
                        Cancel
                    </Button>
                    <Button>Save</Button>
                </div>
            </Col>
        </form>
    );
}
