import { createPortal } from "react-dom";

export default function Spinner({ text = "" }) {
    return createPortal(
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-indigo-950/30 backdrop-blur-sm">
            <div className="spinner "></div>
            <p className="mt-4 text-2xl ">{text}</p>
        </div>,
        document.body,
    );
}
