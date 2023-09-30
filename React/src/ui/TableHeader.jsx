export default function TableHeader({ children }) {
    return (
        <div
            role="row"
            className=" grid grid-cols-[10rem_1fr_1fr_1fr_1fr_1fr] bg-indigo-600 font-bold tracking-wider text-white"
        >
            {children}
        </div>
    );
}
