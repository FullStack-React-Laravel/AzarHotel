import { useSearchParams } from "react-router-dom";

export default function Filter({ options }) {
    // Get url values
    const [searchParams, setSearchParams] = useSearchParams();
    const currentValue = searchParams.get("filter") || "all";

    // Set URL values depending on the button that the user clicks on
    function handleClick(option) {
        searchParams.set(option.type, option.value);
        setSearchParams(searchParams);
    }

    return (
        <div className=" mb-4 flex w-80 items-center justify-between rounded-md bg-white px-4 py-2">
            {options.map((option) => (
                <button
                    onClick={() => handleClick(option)}
                    className={`rounded-md ${
                        currentValue === option.value
                            ? "bg-indigo-900 text-white"
                            : " text-gray-700"
                    } px-3 py-1 transition-all duration-300 hover:bg-indigo-800 hover:text-white`}
                >
                    {option.value}
                </button>
            ))}
        </div>
    );
}
