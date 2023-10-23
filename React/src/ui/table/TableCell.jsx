export default function TableCell({ children, classes = "" }) {
    return <div className={`px-2 py-4 ${classes}`}>{children}</div>;
}
