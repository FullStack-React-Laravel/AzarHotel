import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

export default function Sort({ children, sortBy }) {
    const [searchParams, setSearchParams] = useSearchParams();

    let paramsValue = searchParams.get("sort") || "none";
    let paramsOrder = searchParams.get("order") || "none";
    // let urlValue = paramsValue.split("-").at(0); // defult => none
    // let typeOfSort = paramsValue.split("-").at(1) || "asc";

    // ==================== To Manage Sort in Url ===========================
    function handleClick() {
        if (paramsValue === "none" || paramsValue !== sortBy) {
            searchParams.set("sort", sortBy);
            searchParams.set("order", "asc");
        } else if (paramsValue === sortBy) {
            if (paramsOrder === "asc") {
                searchParams.set("sort", sortBy);
                searchParams.set("order", "desc");
            } else {
                searchParams.delete("sort");
                searchParams.delete("order");
            }
        }

        setSearchParams(searchParams);
    }
    // ===============================================

    return (
        <button
            onClick={handleClick}
            className=" flex cursor-pointer items-center justify-between"
        >
            {children}
            <div className="  flex flex-col justify-center">
                {paramsOrder === "asc" && paramsValue === sortBy && (
                    <MdOutlineArrowDropDown />
                )}
                {paramsOrder === "desc" && paramsValue === sortBy && (
                    <MdOutlineArrowDropUp />
                )}
                {paramsValue !== sortBy && <RiExpandUpDownFill />}
            </div>
        </button>
    );
}
