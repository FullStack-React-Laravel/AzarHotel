export default function TableCell({ children, classes = "", px = 2, py = 4 }) {
    return <div className={`px-${px} py-${py} ${classes}`}>{children}</div>;
}
