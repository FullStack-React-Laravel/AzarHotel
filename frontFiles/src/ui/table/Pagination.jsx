import { useSearchParams } from "react-router-dom";
import Row from "../Row";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Select from "react-select";

const ourStyle = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        cursor: "pointer",
        width: "250px",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
    }),
};

export default function Pagination({ data: { current_page, last_page } }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const options = Array.from({ length: last_page }, (_, i) => {
        return { label: `page ${i + 1}`, value: i + 1 };
    });

    function handleClick(action) {
        searchParams.set("page", action === "prev" ? page - 1 : page + 1);
        setSearchParams(searchParams);
    }

    function handleChange(e) {
        searchParams.set("page", e.value);
        setSearchParams(searchParams);
    }

    return (
        <Row classes=" gap-6 bg-white w-fit m-auto rounded-md p-1">
            <Select
                isDisabled={false}
                onChange={handleChange}
                options={options}
                styles={ourStyle}
                maxMenuHeight={150}
                placeholder="Select page..."
                menuPlacement="top"
            />
            <div className=" flex gap-3">
                <PagBtn
                    disabled={page === 1}
                    onClick={() => handleClick("prev")}
                >
                    <BsArrowLeft className="transition-all duration-300 group-hover/pag:translate-x-[-6px]" />
                    <span className=" ml-2 text-sm">Prev</span>
                </PagBtn>
                <div className="mx-2 flex items-center gap-1">
                    <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold text-gray-100">
                        {page}
                    </span>{" "}
                    of {last_page}
                </div>

                <PagBtn
                    disabled={page === last_page}
                    onClick={() => handleClick("next")}
                >
                    <span className=" mr-2 text-sm">Next</span>
                    <BsArrowRight className="transition-all duration-300 group-hover/pag:translate-x-[6px]" />
                </PagBtn>
            </div>
        </Row>
    );
}

function PagBtn({ children, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center rounded-md ${
                disabled ? "bg-indigo-400" : "bg-indigo-800 hover:bg-indigo-600"
            }  group/pag px-3 py-1  text-white focus:outline-none focus:ring focus:ring-offset-1`}
        >
            {children}
        </button>
    );
}
