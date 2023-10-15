import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// Make option animate smoothly
const animatedComponents = makeAnimated();

// Our custome style for select box
const ourStyle = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        cursor: "pointer",
        padding: "4px",
        borderColor: state.isFocused ? "grey" : "none",
    }),
    multiValue: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: "#312e81",
        color: "white",
        borderRadius: "4px",
    }),
    menuList: () => ({
        color: "#312e81",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
    }),
    multiValueLabel: (style, state) => ({
        ...style,
        color: "white",
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        borderRadius: "4px",

        ":hover": {
            backgroundColor: "#4f46e5",
            color: "white",
        },
    }),
};
export default function Filter({ options }) {
    // Get url values
    const [searchParams, setSearchParams] = useSearchParams();

    let currentValue = "";

    // Set URL values depending on user select
    function handleChange(options) {
        if (!options.length) {
            searchParams.delete("type");
        }
        options.forEach((option, index) => {
            currentValue += `${option.value}${
                index === options.length - 1 ? "" : "-"
            }`;
            searchParams.set("type", currentValue);
        });
        setSearchParams(searchParams);
    }

    return (
        <div className=" mb-4 w-[340px] ">
            <Select
                components={animatedComponents}
                isDisabled={false}
                onChange={handleChange}
                options={options}
                isMulti={true}
                styles={ourStyle}
            />
        </div>
    );
}
