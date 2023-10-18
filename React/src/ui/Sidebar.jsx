import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
    return (
        <div className="relative z-30 row-span-full overflow-hidden rounded-[0px_20px_20px_0px]  border border-l-gray-100 bg-main pt-12 shadow-2xl shadow-gray-600">
            <Logo />
            <MainNav />
        </div>
    );
}
