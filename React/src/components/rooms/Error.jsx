import { BiSolidErrorCircle } from "react-icons/bi";
export default function Error({ children }) {
    return (
        <div className=" flex items-center gap-2 rounded-md bg-red-100 px-2 py-1 text-xs text-red-600">
            <BiSolidErrorCircle className="text-base" /> {children}
        </div>
    );
}
