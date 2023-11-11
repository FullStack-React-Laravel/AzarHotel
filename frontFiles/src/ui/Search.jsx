import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState("");

    // useEffect(() => {
    //     const id = setTimeout(() => {
    //         if (value !== searchParams.get("search") && value) {
    //             searchParams.set("page", 1);
    //             searchParams.set("search", value);
    //         } else if (!value) {
    //             searchParams.delete("page");
    //             searchParams.delete("search");
    //         }

    //         setSearchParams(searchParams);
    //     }, 500);

    //     return () => clearTimeout(id);
    //     // TODO ---------------------- FIX DEP ARRY ----------------------
    // }, [value]);
    return (
        <input
            onChange={(e) => setValue(e.target.value)}
            className="rounded-md border border-gray-200 px-4 py-2.5 transition-all duration-300 focus:outline-none focus:ring"
            placeholder="search rooms..."
        ></input>
    );
}
