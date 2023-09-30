export default function Table({ children, classes = "" }) {
    return (
        <div
            className={`rounded-xl border border-gray-100 bg-white ${classes}`}
            role="table"
        >
            {children}
        </div>
    );
}
