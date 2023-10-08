export default function Spinner({ text = "" }) {
    return (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
            <div className="spinner "></div>
            <p className="mt-4 text-2xl ">{text}</p>
        </div>
    );
}
