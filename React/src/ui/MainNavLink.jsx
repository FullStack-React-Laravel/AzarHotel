import { Link } from "react-router-dom";

export default function MainNavLink({ to, children, active, onClick }) {
    return (
        <Link
            onClick={() => onClick(to)}
            to={to}
            className={`group/navItem flex cursor-pointer items-center gap-4 rounded-md px-6 py-3 text-xl text-gray-500 hover:bg-gray-100 ${
                active === to ? " bg-gray-100" : ""
            }`}
        >
            {children}
            <span className="capitalize group-hover/navItem:text-gray-800">
                {to}
            </span>
        </Link>
    );
}
