function Button({ children, type = "primary", onClick }) {
    const base =
        "inline-block text-base rounded-md bg-indigo-600 uppercase text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1";
    const styles = {
        primary: base + " px-6 py-3",
        none: "",
    };

    if (onClick) {
        return (
            <button onClick={onClick} className={styles[type]}>
                {children}
            </button>
        );
    }
    return <button className={styles[type]}>{children}</button>;
}

export default Button;
