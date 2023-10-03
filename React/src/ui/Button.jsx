function Button({ children, typeOfButton = "primary", onClick, type = "" }) {
    const base =
        "inline-block text-base rounded-md bg-indigo-600 uppercase text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1";
    const styles = {
        primary: base + " px-6 py-3",
        secondary:
            "px-6 py-3 inline-block text-base border border-gray-600 hover:border-indigo-500 rounded-md bg-transparent uppercase text-gray-700 transition-colors duration-300 hover:text-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1",
        none: "",
    };

    if (onClick) {
        return (
            <button
                type={type}
                onClick={onClick}
                className={styles[typeOfButton]}
            >
                {children}
            </button>
        );
    }
    return (
        <button type={type} className={styles[typeOfButton]}>
            {children}
        </button>
    );
}

export default Button;
