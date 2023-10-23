import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState("");

    useEffect(() => {
        const id = setTimeout(() => {
            searchParams.set("search", value);
            setSearchParams(searchParams);
        }, 500);

        return () => clearTimeout(id);
    }, [value, searchParams, setSearchParams]);
    return (
        <input
            onChange={(e) => setValue(e.target.value)}
            className="rounded-md border border-gray-200 px-4 py-2.5 transition-all duration-300 focus:outline-none focus:ring"
            placeholder="search rooms..."
        ></input>
    );
}
