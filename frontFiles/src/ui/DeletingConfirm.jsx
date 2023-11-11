import Button from "./Button";
import Col from "./Col";
import { TiWarningOutline } from "react-icons/ti";
export default function DeletingConfirm({
    onCloseViewBox,
    onDelete,
    isDeleting,
}) {
    return (
        <Col classes=" text-center px-10 pt-20 pb-6">
            <span className=" absolute left-1/2 top-2 translate-x-[-50%]  text-5xl text-red-600 ">
                <TiWarningOutline />
            </span>

            <p className=" mb-2 font-bold">
                You are trying to delete the room{" "}
            </p>
            <p className=" mb-6 text-base text-gray-500">
                This will delete the room from the Azar system, and you can't
                restore the room again in the future.
            </p>
            <div className="flex justify-center gap-4">
                <Button
                    onClick={() => onCloseViewBox()}
                    typeOfButton="secondary"
                >
                    cancel
                </Button>
                <Button
                    disabled={isDeleting}
                    onClick={onDelete}
                    typeOfButton="delete"
                >
                    Delete
                </Button>
            </div>
        </Col>
    );
}
