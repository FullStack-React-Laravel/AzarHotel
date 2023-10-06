import { useEffect, useRef } from "react";

export default function useCloseViewBox({ setOpenName }) {
    const ref = useRef();
    useEffect(
        function () {
            function handleClickOnWindow(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    setOpenName("");
                }
            }
            document.addEventListener("click", handleClickOnWindow, true);
            return () =>
                document.removeEventListener(
                    "click",
                    handleClickOnWindow,
                    true,
                );
        },
        [setOpenName],
    );
    return ref;
}
