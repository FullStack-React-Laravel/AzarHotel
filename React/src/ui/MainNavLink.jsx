import { Link } from "react-router-dom";

export default function MainNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className=" cursor-pointer group/navItem text-xl text-gray-500 flex items-center gap-4 hover:bg-gray-100 py-3 px-6 rounded-md"
    >
      {children}
      <span className="group-hover/navItem:text-gray-800 capitalize">{to}</span>
    </Link>
  );
}
