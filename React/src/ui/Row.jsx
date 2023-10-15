export default function Row({ children, classes }) {
    return (
        <div className={`flex items-center justify-between ${classes}`}>
            {children}
        </div>
    );
}
