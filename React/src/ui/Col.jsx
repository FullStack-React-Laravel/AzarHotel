export default function Col({ children, classes }) {
    return <div className={`flex flex-col ${classes}`}>{children}</div>;
}
