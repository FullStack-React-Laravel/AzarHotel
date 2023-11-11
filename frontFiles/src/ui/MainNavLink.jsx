import { NavLink } from "react-router-dom";

export default function MainNavLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={` group/navItem hover:bg-sidebar flex cursor-pointer items-center gap-4 px-6 py-3 text-xl text-gray-400`}
        >
            {children}
            <span className="capitalize group-hover/navItem:text-white">
                {to}
            </span>
        </NavLink>
    );
}
