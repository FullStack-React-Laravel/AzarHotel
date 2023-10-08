import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useCloseViewBox from "../components/rooms/hooks/useCloseViewBox";

/* This Is Reuseable Compound Componets For VieBox Popop */

// create context to manage state close & open in ViewBox components
const viewBoxContext = createContext();

function ViewBox({ children }) {
    const [openName, setOpenName] = useState("");
    return (
        <viewBoxContext.Provider value={{ openName, setOpenName }}>
            {children}
        </viewBoxContext.Provider>
    );
}

function Open({ children, open }) {
    const { setOpenName } = useContext(viewBoxContext);
    return cloneElement(children, { onClick: () => setOpenName(open) });
}

function Window({ children, width, window }) {
    const { openName, setOpenName } = useContext(viewBoxContext);
    const ref = useCloseViewBox({ setOpenName });
    if (openName !== window) return null;

    return createPortal(
        <div className="fixed left-0 top-0  h-full w-full overflow-scroll bg-indigo-950/30 py-10 backdrop-blur-sm">
            <div
                ref={ref}
                id="view-box"
                className={`absolute left-1/2 top-1/2 max-h-[700px] translate-x-[-50%] translate-y-[-50%] overflow-scroll rounded-3xl bg-white ${
                    width ? width : ""
                }`}
            >
                <button
                    onClick={() => setOpenName("")}
                    className=" absolute right-4 top-4 rounded-md px-2 text-3xl text-gray-600 transition-all duration-300 hover:bg-gray-100"
                >
                    &times;
                </button>
                {cloneElement(children, {
                    onCloseViewBox: () => setOpenName(""),
                })}
            </div>
        </div>,
        document.body,
    );
}

ViewBox.Open = Open;
ViewBox.Window = Window;
export default ViewBox;
