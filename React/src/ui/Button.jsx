function Button({
    children,
    typeOfButton = "primary",
    onClick,
    type = "",
    disabled,
}) {
    const base =
        "inline-block text-base rounded-md  uppercase text-white transition-colors duration-300  focus:outline-none focus:ring focus:ring-offset-1 px-6 py-2";
    const styles = {
        primary:
            base +
            ` focus:ring-indigo-400  ${
                disabled ? "bg-indigo-200" : "bg-indigo-600 hover:bg-indigo-500"
            }  `,
        secondary:
            "px-6 py-2 inline-block text-base border border-gray-500 hover:border-indigo-500 rounded-md bg-transparent uppercase text-gray-500 transition-colors duration-300 hover:text-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1",
        none: "",
        delete: base + ` focus:ring-red-400 hover:bg-red-500 bg-red-600 `,
    };
    if (onClick) {
        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={styles[typeOfButton]}
            >
                {children}
            </button>
        );
    }
    return (
        <button
            disabled={disabled}
            type={type}
            className={styles[typeOfButton]}
        >
            {children}
        </button>
    );
}

export default Button;
