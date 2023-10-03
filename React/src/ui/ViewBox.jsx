import { createPortal } from "react-dom";
export default function ViewBox({ children, onClose }) {
    return createPortal(
        <div className="fixed left-0 top-0  h-full w-full flex-col overflow-scroll bg-indigo-950/30 py-10 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white px-10 pb-10 pt-20">
                <button
                    onClick={onClose}
                    className=" absolute right-8 top-8 rounded-md px-2 text-5xl text-gray-600 transition-all duration-300 hover:rotate-90 hover:bg-gray-100 hover:text-red-600"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body,
    );
}
