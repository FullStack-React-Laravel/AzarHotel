import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

const icon = {
    none: <RiExpandUpDownFill />,
    asc: <MdOutlineArrowDropDown />,
    desc: <MdOutlineArrowDropUp />,
};

export default function Sort({ children, sortBy }) {
    const [searchParams, setSearchParams] = useSearchParams();

    let orderValue = searchParams.get("order");
    let sortValue = searchParams.get("sort");

    function handleClick() {
        if (sortValue !== sortBy) {
            searchParams.set("sort", sortBy);
            searchParams.set("order", "asc");
        } else {
            if (orderValue !== "asc") {
                searchParams.delete("sort");
                searchParams.delete("order");
            } else {
                searchParams.set("sort", sortBy);
                searchParams.set("order", "desc");
            }
        }

        setSearchParams(searchParams);
    }

    return (
        <button
            onClick={handleClick}
            className=" flex cursor-pointer items-center justify-between"
        >
            {children}
            <div className="  flex flex-col justify-center">
                {sortValue === sortBy
                    ? orderValue === "asc"
                        ? icon["asc"]
                        : icon["desc"]
                    : icon["none"]}
            </div>
        </button>
    );
}
