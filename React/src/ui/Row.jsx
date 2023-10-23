export default function Row({ children, classes = "" }) {
    return <div className={`flex items-center ${classes}`}>{children}</div>;
}
